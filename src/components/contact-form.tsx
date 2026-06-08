"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const enquiryTypes = [
  "Cyber risk assessment",
  "ISO 27001 readiness",
  "SOC 1 or SOC 2 readiness",
  "GRC program support",
  "CybHrSec GRC Tool",
  "Keynote speaker",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New CybHrSec website enquiry");
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/5f55b1508224f0f615acc7e50f41d2a7", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Name
          <input
            name="name"
            required
            className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Email
          <input
            name="email"
            required
            type="email"
            className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Company
        <input
          name="company"
          className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
          placeholder="Company name"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        What do you need help with?
        <select
          name="enquiryType"
          className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition focus:border-cyan-200"
        >
          {enquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
          placeholder="Tell us about your business, timeline, and compliance goals."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 min-h-12 rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "sent" ? (
        <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-medium text-emerald-100">
          Your enquiry has been sent. CybHrSec will respond as soon as possible.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-2xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm font-medium text-rose-100">
          Something went wrong. Please email info@cybhrsec.com directly.
        </p>
      ) : null}
    </form>
  );
}
