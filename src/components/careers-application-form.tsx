"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const positions = [
  "Virtual GRC Consultant",
  "Cybersecurity & GRC Intern",
  "General Interest",
];

const interestAreas = [
  "Governance, Risk & Compliance (GRC)",
  "ISO 27001",
  "SOC 2",
  "Third-Party Risk Management",
  "Privacy & Data Protection",
  "AI Governance",
  "Cybersecurity Awareness & Training",
  "Risk Assessments",
  "Policy Development",
  "Digital Safety Education",
];

const acceptedFileTypes = ".pdf,.doc,.docx";

export function CareersApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const position = String(formData.get("position") ?? "General Interest");
    const email = String(formData.get("email") ?? "").trim();
    const linkedIn = String(formData.get("linkedInProfile") ?? "").trim();

    formData.append("_subject", "Application Received – CybHrSec");
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("Applicant Name", `${firstName} ${lastName}`.trim());
    formData.append("Position Selected", position);
    formData.append("Email Address", email);
    formData.append("LinkedIn URL", linkedIn);
    formData.append("Submission Timestamp", new Date().toISOString());
    formData.append(
      "_autoresponse",
      [
        "Thank you for your interest in CybHrSec.",
        "",
        "We have successfully received your application and appreciate your interest in joining our team and talent network.",
        "",
        "Our team will review your information and contact you if your background aligns with current or future opportunities.",
        "",
        "Thank you for supporting our mission of making cybersecurity, governance, risk management, and compliance more accessible and human-centered.",
      ].join("\n"),
    );

    try {
      const response = await fetch("https://formsubmit.co/ajax/5f55b1508224f0f615acc7e50f41d2a7", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Application submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      id="talent-network"
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 md:p-8"
    >
      <FormSection title="Personal Information">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput label="First Name" name="firstName" required />
          <TextInput label="Last Name" name="lastName" required />
          <TextInput label="Email Address" name="email" required type="email" />
          <TextInput label="Phone Number" name="phone" type="tel" />
          <TextInput label="City" name="city" />
          <TextInput label="State / Province" name="stateProvince" />
          <TextInput label="Country" name="country" />
          <TextInput label="LinkedIn Profile URL" name="linkedInProfile" type="url" />
        </div>
      </FormSection>

      <FormSection title="Position Information">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Position
          <select
            name="position"
            required
            className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition focus:border-cyan-200"
          >
            {positions.map((position) => (
              <option key={position}>{position}</option>
            ))}
          </select>
        </label>
      </FormSection>

      <FormSection title="Professional Information">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput label="Current Job Title" name="currentJobTitle" />
          <TextInput label="Years of Experience" name="yearsOfExperience" />
          <TextInput label="Highest Level of Education" name="education" />
          <TextInput label="Relevant Certifications" name="certifications" />
        </div>
      </FormSection>

      <FormSection title="Areas of Interest">
        <div className="grid gap-3 sm:grid-cols-2">
          {interestAreas.map((area) => (
            <label
              key={area}
              className="flex gap-3 rounded-2xl border border-white/10 bg-[#070719]/80 p-4 text-sm font-medium text-slate-200"
            >
              <input
                className="mt-1 size-4 accent-cyan-300"
                name="areasOfInterest"
                type="checkbox"
                value={area}
              />
              <span>{area}</span>
            </label>
          ))}
        </div>
      </FormSection>

      <FormSection title="Uploads">
        <div className="grid gap-4 sm:grid-cols-2">
          <FileInput label="Resume Upload" name="resume" required />
          <FileInput label="Cover Letter Upload (Optional)" name="coverLetter" />
        </div>
      </FormSection>

      <FormSection title="Additional Information">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Share anything else you would like us to know.
          <textarea
            className="min-h-32 resize-y rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
            name="additionalInformation"
          />
        </label>
      </FormSection>

      <label className="flex gap-3 rounded-2xl border border-white/10 bg-[#070719]/80 p-4 text-sm font-medium leading-6 text-slate-200">
        <input
          className="mt-1 size-4 accent-cyan-300"
          name="recruitmentConsent"
          required
          type="checkbox"
          value="Yes"
        />
        <span>
          I consent to CybHrSec storing and reviewing my application information
          for recruitment and talent network purposes.
        </span>
      </label>

      <input
        aria-hidden="true"
        className="hidden"
        name="_honey"
        tabIndex={-1}
      />

      <button
        className="min-h-12 rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Submitting..." : "Submit Application"}
      </button>

      {status === "sent" ? (
        <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-medium text-emerald-100">
          Your application has been submitted. CybHrSec will review your
          information and contact you if there is a current or future fit.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-2xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm font-medium text-rose-100">
          Something went wrong. Please email info@cybhrsec.com directly with
          your application materials.
        </p>
      ) : null}
    </form>
  );
}

function FormSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <fieldset className="grid gap-4">
      <legend className="text-base font-semibold text-white">{title}</legend>
      {children}
    </fieldset>
  );
}

function TextInput({
  label,
  name,
  required = false,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input
        className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}

function FileInput({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input
        accept={acceptedFileTypes}
        className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-sm text-slate-200 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:text-sm file:font-bold file:text-[#08071a]"
        name={name}
        required={required}
        type="file"
      />
      <span className="text-xs text-slate-500">Accepted formats: PDF, DOC, DOCX</span>
    </label>
  );
}
