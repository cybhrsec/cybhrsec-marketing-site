export const runtime = "nodejs";

const allowedPositions = new Set([
  "Virtual GRC Consultant",
  "Cybersecurity & GRC Intern",
]);

const allowedFileTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const allowedExtensions = new Set(["pdf", "doc", "docx"]);
const maxFileSize = 5 * 1024 * 1024;

type Attachment = {
  content: string;
  filename: string;
};

type ApplicationFields = {
  additionalInformation: string;
  certifications: string;
  city: string;
  country: string;
  currentJobTitle: string;
  education: string;
  email: string;
  firstName: string;
  lastName: string;
  linkedInProfile: string;
  phone: string;
  positionAppliedFor: string;
  stateProvince: string;
  yearsOfExperience: string;
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fields = getFields(formData);
    const consent = sanitize(formData.get("recruitmentConsent"));
    const honeypot = sanitize(formData.get("_honey"));

    if (honeypot) {
      return Response.json({ ok: true });
    }

    validateFields(fields, consent);

    const resume = formData.get("resume");
    const coverLetter = formData.get("coverLetter");
    const resumeAttachment = await fileToAttachment(resume, "Resume", true);
    const coverLetterAttachment = await fileToAttachment(coverLetter, "Cover letter", false);
    const attachments = [resumeAttachment, coverLetterAttachment].filter(
      Boolean,
    ) as Attachment[];

    await sendApplicationEmails(fields, attachments);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Careers application failed", error);
    return Response.json(
      { error: "There was an issue submitting your application." },
      { status: 400 },
    );
  }
}

function getFields(formData: FormData): ApplicationFields {
  return {
    additionalInformation: sanitize(formData.get("additionalInformation")),
    certifications: sanitize(formData.get("certifications")),
    city: sanitize(formData.get("city")),
    country: sanitize(formData.get("country")),
    currentJobTitle: sanitize(formData.get("currentJobTitle")),
    education: sanitize(formData.get("education")),
    email: sanitize(formData.get("email")),
    firstName: sanitize(formData.get("firstName")),
    lastName: sanitize(formData.get("lastName")),
    linkedInProfile: sanitize(formData.get("linkedInProfile")),
    phone: sanitize(formData.get("phone")),
    positionAppliedFor: sanitize(formData.get("positionAppliedFor")),
    stateProvince: sanitize(formData.get("stateProvince")),
    yearsOfExperience: sanitize(formData.get("yearsOfExperience")),
  };
}

function validateFields(fields: ApplicationFields, consent: string) {
  if (!fields.firstName || !fields.lastName || !fields.email) {
    throw new Error("Missing required applicant fields");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    throw new Error("Invalid email address");
  }

  if (!allowedPositions.has(fields.positionAppliedFor)) {
    throw new Error("Unsupported position");
  }

  if (consent !== "Yes") {
    throw new Error("Consent is required");
  }
}

async function fileToAttachment(
  value: FormDataEntryValue | null,
  label: string,
  required: boolean,
) {
  if (!(value instanceof File) || value.size === 0) {
    if (required) throw new Error(`${label} is required`);
    return null;
  }

  const extension = value.name.split(".").pop()?.toLowerCase() ?? "";
  if (!allowedFileTypes.has(value.type) || !allowedExtensions.has(extension)) {
    throw new Error(`${label} file type is not supported`);
  }

  if (value.size > maxFileSize) {
    throw new Error(`${label} file is too large`);
  }

  const buffer = Buffer.from(await value.arrayBuffer());

  return {
    content: buffer.toString("base64"),
    filename: sanitizeFilename(value.name),
  };
}

async function sendApplicationEmails(
  fields: ApplicationFields,
  attachments: Attachment[],
) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CAREERS_EMAIL_FROM;
  const to = process.env.CAREERS_EMAIL_TO ?? "info@cybhrsec.com";

  if (!apiKey || !from) {
    throw new Error("Careers email environment variables are not configured");
  }

  const applicantName = `${fields.firstName} ${fields.lastName}`.trim();
  const submittedAt = new Date().toISOString();

  const internalBody = [
    ["Applicant Name", applicantName],
    ["Position Applied For", fields.positionAppliedFor],
    ["Email Address", fields.email],
    ["Phone Number", fields.phone],
    ["City", fields.city],
    ["State", fields.stateProvince],
    ["Country", fields.country],
    ["LinkedIn URL", fields.linkedInProfile],
    ["Current Job Title", fields.currentJobTitle],
    ["Years of Experience", fields.yearsOfExperience],
    ["Highest Level of Education", fields.education],
    ["Relevant Certifications", fields.certifications],
    ["Additional Information", fields.additionalInformation],
    ["Submission Timestamp", submittedAt],
  ];

  await Promise.all([
    sendEmail({
      apiKey,
      attachments,
      from,
      html: tableEmail(internalBody),
      subject: `New Careers Application - ${fields.positionAppliedFor}`,
      text: internalBody.map(([label, value]) => `${label}: ${value || "Not provided"}`).join("\n"),
      to,
    }),
    sendEmail({
      apiKey,
      from,
      html: confirmationHtml(fields.positionAppliedFor),
      subject: "Application Received – CybHrSec",
      text: confirmationText(fields.positionAppliedFor),
      to: fields.email,
    }),
  ]);
}

async function sendEmail({
  apiKey,
  attachments,
  from,
  html,
  subject,
  text,
  to,
}: {
  apiKey: string;
  attachments?: Attachment[];
  from: string;
  html: string;
  subject: string;
  text: string;
  to: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      attachments,
      from,
      html,
      subject,
      text,
      to,
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Email provider error: ${response.status}`);
  }
}

function tableEmail(rows: string[][]) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827">
      <h1 style="font-size:20px">New CybHrSec Careers Application</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th align="left" style="border:1px solid #e5e7eb;background:#f9fafb;width:220px">${escapeHtml(label)}</th>
                <td style="border:1px solid #e5e7eb">${escapeHtml(value || "Not provided")}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <p>Resume and cover letter files are attached when provided.</p>
    </div>
  `;
}

function confirmationText(position: string) {
  return [
    "Thank you for your interest in CybHrSec.",
    "",
    `We have successfully received your application for the ${position} role.`,
    "",
    "Our team will review your information and contact you if your background aligns with our current needs.",
    "",
    "Thank you for supporting our mission of making cybersecurity, governance, risk management, and compliance more accessible and human-centered.",
    "",
    "Kind regards,",
    "",
    "CybHrSec",
  ].join("\n");
}

function confirmationHtml(position: string) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <p>Thank you for your interest in CybHrSec.</p>
      <p>We have successfully received your application for the ${escapeHtml(position)} role.</p>
      <p>Our team will review your information and contact you if your background aligns with our current needs.</p>
      <p>Thank you for supporting our mission of making cybersecurity, governance, risk management, and compliance more accessible and human-centered.</p>
      <p>Kind regards,</p>
      <p>CybHrSec</p>
    </div>
  `;
}

function sanitize(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, 2000);
}

function sanitizeFilename(value: string) {
  return value.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
