import React from "react";
import type { SVGProps } from "react";

export default function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#090F16"
        d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"
      ></path>
    </svg>
  );
}
