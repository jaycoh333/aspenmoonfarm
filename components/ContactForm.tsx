"use client";

import { useState, FormEvent } from "react";
import { Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const topics = [
  "General question",
  "CSA membership",
  "Wholesale inquiry",
  "Farm tour / education",
  "Employment",
  "Press / partnerships",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder: wire to your provider (Formspree, Resend, etc.).
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-start gap-3 p-8">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-100 text-gold-700">
          <Check className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="font-display text-xl font-semibold text-olive-900">
          Thanks — your note is in our inbox.
        </h3>
        <p className="text-olive-800/85">
          We try to reply within one business day. If it's urgent, give us a
          call at the number on this page.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card flex flex-col gap-5 p-7 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            type="text"
            name="name"
            required
            className={inputCls}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            name="email"
            required
            className={inputCls}
            placeholder="you@example.com"
          />
        </Field>
      </div>
      <Field label="Topic">
        <select name="topic" className={cn(inputCls, "pr-8")} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Message" required>
        <textarea
          name="message"
          required
          rows={5}
          className={cn(inputCls, "resize-y")}
          placeholder="How can we help?"
        />
      </Field>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary self-start"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <Send className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-2xl border border-olive-900/15 bg-cream-50 px-4 py-3 text-[15px] text-olive-900 placeholder:text-olive-700/50 focus:border-olive-800/40 focus:outline-none focus:ring-2 focus:ring-olive-800/10";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-olive-900">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
