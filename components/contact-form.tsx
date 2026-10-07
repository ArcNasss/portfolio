"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!googleScriptUrl) {
      setStatus("Form belum dikonfigurasi.");
      return;
    }

    setIsSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    body.set("name", String(formData.get("name") ?? ""));
    body.set("message", String(formData.get("message") ?? ""));

    try {
      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      form.reset();
      setStatus("Message sent successfully.");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-all duration-300 focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none transition-all duration-300 focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-105" />
      </button>

      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  );
}