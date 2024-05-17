"use client";

import { useState } from "react";
import PlusIcon from "../_assets/PlusIcon";
import { motion, AnimatePresence } from "framer-motion";
import MinusIcon from "../_assets/MinusIcon";

type props = {
  f: {
    id: number;
    question: string;
    answer: string;
  };
};

export default function FaqCard({ f }: props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <details className="max-w-[920px]" aria-label={`question ${f.id}`}>
      <summary
        className="flex items-center gap-x-5 w-fit cursor-pointer"
        onClick={() => setActive((prev) => !prev)}
      >
        <span className="text-xl">
          {active ? <MinusIcon aria-hidden /> : <PlusIcon aria-hidden />}
        </span>
        <span className="text-xl font-semibold">{f.question}</span>
      </summary>
      <AnimatePresence initial={false}>
        {active ? (
          <motion.p
            key={f.id}
            className={`ml-6 mt-3 pl-3.5 border-l-4 border-l-secondary text-lg`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {f.answer}
          </motion.p>
        ) : (
          ""
        )}
      </AnimatePresence>
    </details>
  );
}
