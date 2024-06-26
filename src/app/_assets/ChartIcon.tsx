import React from "react";
import type { SVGProps } from "react";

export default function ChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="#F5F8FA" fillRule="evenodd" clipRule="evenodd">
        <path d="M22.775 8A9 9 0 0 1 23 10h-9V1a9 9 0 0 1 8.775 7m-2.067 0A6.999 6.999 0 0 0 16 3.292V8z"></path>
        <path d="M1 14a9 9 0 0 1 11-8.775V12h6.775A9 9 0 1 1 1 14m15.804 0H10V7.196A6.804 6.804 0 1 0 16.804 14"></path>
      </g>
    </svg>
  );
}
