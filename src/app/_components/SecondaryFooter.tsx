import Link from "next/link";

export default function SecondaryFooter() {
  return (
    <section className="px-page-margin-x py-5 bg-text text-sec-bg flex items-center justify-between tablet:flex-col tablet:gap-y-5">
      <Link
        href="mailto: support@conqur.com"
        className="text-base font-bold duration-150 hover:text-secondary mobile-sm:text-center"
      >
        support@conqur.com
      </Link>
      <p className="font-semibold text-sm mobile-sm:text-center">
        &copy; 2024 Dani&apos;s Products. All rights reserved.
      </p>
    </section>
  );
}
