"use client";

import { useRef, useState } from "react";
import { useNotifications } from "reapop";
import { ZodError, z } from "zod";

const parser = z.string().email();

export default function CTAForm() {
  const [emailVal, setEmailVal] = useState<string>("");
  const [errorState, setErrorState] = useState<boolean>(false);
  const { notify } = useNotifications();
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorState(false);

    try {
      const parsedEmail = parser.parse(emailVal);

      const res = await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: parsedEmail }),
      });

      if (!res.ok) {
        throw new Error("");
      }

      setEmailVal("");
      notify("Thank you for joining Conqur.", "success", {
        id: "cta-form-success",
      });
      setErrorState(false);
      inputRef.current?.blur();
    } catch (error) {
      setErrorState(true);
      if (error instanceof ZodError) {
        notify("Invalid email value", "error", { id: "cta-form-error" });
        return;
      }
      notify("Error Happened. Try again later.", "error", {
        id: "cta-form-error",
      });
      return;
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center gap-4 mobile:flex-col"
      aria-label="Join Conqur's waitlist form"
    >
      <input
        type="email"
        placeholder="Enter your email here"
        aria-placeholder="Enter your email here"
        className="w-full max-w-[420px] block bg-input text-hero-email-input-font px-[18px] py-2 rounded-xl border-primary border text-[#000] font-semibold placeholder:font-normal placeholder:text-primary tablet-sm:px-4 tablet-sm:py-1.5 mobile:max-w-none"
        value={emailVal}
        onChange={(e) => setEmailVal(e.target.value)}
        ref={inputRef}
        required
        aria-required
        aria-label="Enter your email here to join the waitlist"
        autoComplete="email"
        aria-invalid={errorState}
        aria-errormessage="cta-form-error"
        id="waitlist-form-email-input"
      />
      <button
        type="submit"
        className="my-cta-btn mobile:w-full mobile:py-2"
        aria-live="assertive"
      >
        Join Waitlist
      </button>
    </form>
  );
}
