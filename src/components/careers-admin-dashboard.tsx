"use client";

import { useMemo, useState } from "react";

type Applicant = {
  id: string;
  name: string;
  email: string;
  phone: string;
  linkedIn: string;
  position: string;
  certifications: string;
  experience: string;
  resume: string;
  coverLetter: string;
  submittedAt: string;
};

const statuses = ["New", "Under Review", "Interview", "Talent Pool", "Rejected", "Hired"];
const positions = ["All Positions", "Virtual GRC Consultant", "Cybersecurity & GRC Intern", "General Interest"];

const applicants: Applicant[] = [];

export function CareersAdminDashboard() {
  const [positionFilter, setPositionFilter] = useState("All Positions");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [certificationFilter, setCertificationFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [search, setSearch] = useState("");
  const [candidateStatus, setCandidateStatus] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});

  const filteredApplicants = useMemo(() => {
    return applicants.filter((applicant) => {
      const status = candidateStatus[applicant.id] ?? "New";
      const searchValue = search.toLowerCase();
      const matchesSearch = [applicant.name, applicant.email, applicant.certifications, applicant.position]
        .join(" ")
        .toLowerCase()
        .includes(searchValue);

      return (
        matchesSearch &&
        (positionFilter === "All Positions" || applicant.position === positionFilter) &&
        (statusFilter === "All Statuses" || status === statusFilter) &&
        applicant.certifications.toLowerCase().includes(certificationFilter.toLowerCase()) &&
        applicant.experience.toLowerCase().includes(experienceFilter.toLowerCase())
      );
    });
  }, [candidateStatus, certificationFilter, experienceFilter, positionFilter, search, statusFilter]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <AdminInput label="Search" value={search} onChange={setSearch} placeholder="Name, email, certification, position" />
          <AdminSelect label="Position" value={positionFilter} onChange={setPositionFilter} options={positions} />
          <AdminSelect label="Status" value={statusFilter} onChange={setStatusFilter} options={["All Statuses", ...statuses]} />
          <AdminInput label="Certification" value={certificationFilter} onChange={setCertificationFilter} placeholder="Security+, ISO 27001" />
          <AdminInput label="Experience Level" value={experienceFilter} onChange={setExperienceFilter} placeholder="Intern, 5 years" />
        </div>

        <div className="mt-8 grid gap-5">
          {filteredApplicants.length === 0 ? (
            <div className="rounded-[1.5rem] border border-white/10 bg-[#070719]/80 p-6">
              <h2 className="text-xl font-semibold text-white">
                No applicant records are connected yet.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Applications submitted through the website are sent to CybHrSec by
                email with applicant details, resume upload, cover letter upload,
                and submission timestamp. This dashboard is ready for candidate
                review workflows once persistent application storage is connected.
              </p>
            </div>
          ) : (
            filteredApplicants.map((applicant) => (
              <article
                key={applicant.id}
                className="rounded-[1.5rem] border border-white/10 bg-[#070719]/80 p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{applicant.name}</h2>
                    <dl className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                      <AdminDetail label="Email" value={applicant.email} />
                      <AdminDetail label="Phone" value={applicant.phone} />
                      <AdminDetail label="LinkedIn" value={applicant.linkedIn} />
                      <AdminDetail label="Position" value={applicant.position} />
                      <AdminDetail label="Certifications" value={applicant.certifications} />
                      <AdminDetail label="Experience" value={applicant.experience} />
                      <AdminDetail label="Resume" value={applicant.resume} />
                      <AdminDetail label="Cover Letter" value={applicant.coverLetter} />
                      <AdminDetail label="Submitted" value={applicant.submittedAt} />
                    </dl>
                  </div>
                  <div className="grid gap-4">
                    <AdminSelect
                      label="Application Status"
                      value={candidateStatus[applicant.id] ?? "New"}
                      onChange={(value) =>
                        setCandidateStatus((current) => ({ ...current, [applicant.id]: value }))
                      }
                      options={statuses}
                    />
                    <label className="grid gap-2 text-sm font-medium text-slate-200">
                      Internal Notes
                      <textarea
                        className="min-h-36 resize-y rounded-2xl border border-white/10 bg-[#050514] px-4 py-3 text-white outline-none transition focus:border-cyan-200"
                        onChange={(event) =>
                          setNotes((current) => ({
                            ...current,
                            [applicant.id]: event.target.value,
                          }))
                        }
                        value={notes[applicant.id] ?? ""}
                      />
                    </label>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function AdminInput({
  label,
  onChange,
  placeholder,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input
        className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

function AdminSelect({
  label,
  onChange,
  options,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  options: string[];
  value: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <select
        className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition focus:border-cyan-200"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function AdminDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-cyan-200">{label}</dt>
      <dd className="mt-1 break-words">{value || "Not provided"}</dd>
    </div>
  );
}
