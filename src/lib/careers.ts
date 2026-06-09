export type CareerRole = {
  certifications: string[];
  employmentType: string;
  href: string;
  location: string;
  overview: string;
  qualifications: string[];
  responsibilities: string[];
  summary: string;
  title: string;
};

export const careerRoles: CareerRole[] = [
  {
    title: "Virtual GRC Consultant",
    employmentType: "Contract / Project-Based",
    location: "Remote",
    href: "/careers/virtual-grc-consultant",
    summary:
      "Support cybersecurity, governance, risk management, compliance, and advisory initiatives for organizations using CybHrSec's Human-Centered Cybersecurity and Compliance approach.",
    overview:
      "CybHrSec is seeking a Virtual GRC Consultant to support cybersecurity, governance, risk management, compliance, and advisory initiatives for clients. This role will help organizations understand cybersecurity risks, improve compliance readiness, develop practical governance structures, and implement human-centered cybersecurity practices.",
    responsibilities: [
      "Conduct cybersecurity and compliance assessments",
      "Support ISO 27001 readiness and implementation activities",
      "Support SOC 2 readiness initiatives",
      "Perform risk assessments and maintain risk registers",
      "Develop and review policies, standards, and procedures",
      "Support third-party and vendor risk assessments",
      "Prepare executive reports and compliance documentation",
      "Assist with remediation planning and risk treatment activities",
      "Support cybersecurity awareness and training initiatives",
      "Contribute to implementation of the CybHrSec HCC-GRC framework",
    ],
    qualifications: [
      "Experience in cybersecurity, governance, risk management, audit, compliance, privacy, or information security",
      "Familiarity with frameworks such as ISO 27001, NIST CSF, SOC 2, HIPAA, PCI DSS, or similar standards",
      "Strong communication and stakeholder engagement skills",
      "Ability to translate technical concepts into business language",
    ],
    certifications: ["Security+", "ISO 27001", "CISA", "CRISC", "CGRC", "CISM", "CISSP"],
  },
  {
    title: "Cybersecurity & GRC Intern",
    employmentType: "Internship",
    location: "Remote",
    href: "/careers/cybersecurity-grc-intern",
    summary:
      "Gain hands-on experience supporting cybersecurity, compliance, governance, risk management, research, and educational initiatives.",
    overview:
      "CybHrSec is seeking motivated students, career changers, and aspiring cybersecurity professionals interested in gaining practical experience in cybersecurity, governance, risk management, compliance, digital safety, and consulting. This role is designed to provide hands-on experience supporting client projects, cybersecurity research, awareness initiatives, and operational activities.",
    responsibilities: [
      "Assist with cybersecurity research",
      "Support development of client deliverables",
      "Participate in risk assessment activities",
      "Support policy and documentation reviews",
      "Assist with cybersecurity awareness initiatives",
      "Help create educational cybersecurity content",
      "Support administrative and operational activities",
      "Contribute to research related to emerging cybersecurity threats and trends",
    ],
    qualifications: [
      "Current student, recent graduate, or career changer",
      "Interest in cybersecurity, governance, compliance, privacy, risk management, or information security",
      "Strong written and verbal communication skills",
      "Eagerness to learn and contribute",
      "Experience is not required.",
    ],
    certifications: [],
  },
];

export function getCareerRole(title: string) {
  return careerRoles.find((role) => role.title === title);
}
