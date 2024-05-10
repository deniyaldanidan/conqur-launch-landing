import Link from "next/link";

export default function SecondaryFooter() {
  return (
    <section className="px-page-margin-x py-5 bg-text text-sec-bg flex items-center justify-between">
      <Link
        href="mailto: support@conqur.com"
        className="text-base font-bold duration-150 hover:text-secondary"
      >
        support@conqur.com
      </Link>
      <p className="font-semibold text-sm">
        &copy; 2024 Dani&apos;s Products. All rights reserved.
      </p>
    </section>
  );
}
