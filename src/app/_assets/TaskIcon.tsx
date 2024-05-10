import React from "react";
import type { SVGProps } from "react";

export default function TaskIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="#F5F8FA"
        d="M768 256h1280v128H768zm0 768V896h1280v128zm0 640v-128h1280v128zM256 768q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-53 20-99t55-82t81-55t100-20m0 400q30 0 56-11t45-31t31-46t12-56t-11-56t-31-45t-46-31t-56-12t-56 11t-45 31t-31 46t-12 56t11 56t31 45t46 31t56 12m0 240q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-53 20-99t55-82t81-55t100-20m0 400q30 0 56-11t45-31t31-46t12-56t-11-56t-31-45t-46-31t-56-12t-56 11t-45 31t-31 46t-12 56t11 56t31 45t46 31t56 12M192 358L467 83l90 90l-365 365L19 365l90-90z"
      ></path>
    </svg>
  );
}
