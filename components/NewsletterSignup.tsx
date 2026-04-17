"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterSignup({
  variant = "light",
  compact = false,
}: {
  variant?: "light" | "dark";
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Placeholder: wire to provider (Mailchimp, ConvertKit, etc.) here.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setEmail("");
  };

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-3 text-sm",
          isDark
            ? "bg-cream-100/10 text-cream-100"
            : "bg-olive-800/5 text-olive-900"
        )}
      >
        <Check className="h-4 w-4 text-gold-400" aria-hidden />
        You're on the list. Look for our next seasonal update.
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex w-full items-center gap-2 rounded-full p-1.5 transition",
        isDark
          ? "bg-cream-100/10 ring-1 ring-inset ring-cream-100/15 focus-within:ring-gold-300"
          : "bg-cream-100 ring-1 ring-inset ring-olive-900/10 focus-within:ring-olive-800/40",
        compact && "gap-1 p-1"
      )}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="you@example.com"
        className={cn(
          "min-w-0 flex-1 rounded-full bg-transparent px-4 py-2 text-sm outline-none placeholder:opacity-60",
          isDark ? "text-cream-100" : "text-olive-900"
        )}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition",
          isDark
            ? "bg-gold-400 text-olive-900 hover:bg-gold-300"
            : "bg-olive-800 text-cream-50 hover:bg-olive-900",
          "disabled:opacity-60"
        )}
      >
        {status === "submitting" ? "…" : "Subscribe"}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </button>
      {status === "error" && (
        <p className="sr-only" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
