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
    <div className="max-w-[920px]">
      <h4
        className="flex items-center gap-x-5 w-fit cursor-pointer"
        onClick={() => setActive((prev) => !prev)}
      >
        <span className="text-xl">{active ? <MinusIcon /> : <PlusIcon />}</span>
        <span className="text-xl font-semibold">{f.question}</span>
      </h4>
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
    </div>
  );
}
