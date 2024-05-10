"use client";

import { useState } from "react";

export default function CTAForm() {
  const [emailVal, setEmailVal] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailVal.length) {
      console.log("Hey", emailVal + ",", "You're joined to Waitlist!!");
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
        />
        <button type="submit" className="my-cta-btn">
          Join Waitlist
        </button>
      </div>
      <p className="text-danger font-bold text-sm mx-2">Error happened</p>
    </form>
  );
}
