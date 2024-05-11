"use client";

import { useRef, useState } from "react";
import { useNotifications } from "reapop";
import { ZodError, z } from "zod";

const parser = z.string().email();

export default function CTAForm() {
  const [emailVal, setEmailVal] = useState<string>("");
  const [errorVal, setErrorVal] = useState<string>("");
  const { notify } = useNotifications();
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorVal("");

    try {
      const parsedEmail = parser.parse(emailVal);

      await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: parsedEmail }),
      });

      setEmailVal("");
      notify("Thank you for joining Conqur.", "success");
      inputRef.current?.blur();
    } catch (error) {
      if (error instanceof ZodError) {
        setErrorVal("Invalid Email value");
        return;
      }
      setErrorVal("Error Happened. Try again later.");
      return;
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-y-1">
      <div className="flex items-end gap-x-4">
        <input
          type="email"
          placeholder="Enter your email here"
          className="w-full max-w-[420px] block bg-input text-hero-email-input-font px-[18px] py-2 rounded-xl border-primary border text-[#000] font-semibold placeholder:font-normal placeholder:text-primary"
          value={emailVal}
          onChange={(e) => setEmailVal(e.target.value)}
          ref={inputRef}
        />
        <button type="submit" className="my-cta-btn">
          Join Waitlist
        </button>
      </div>
      <p className="text-danger font-bold text-sm mx-2">{errorVal}</p>
    </form>
  );
}
