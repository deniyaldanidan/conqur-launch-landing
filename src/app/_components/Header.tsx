import Link from "next/link";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center px-page-margin-x py-2.5 border-b-[0.5px] border-b-primary"
      role="banner"
      aria-label="Header of the WebPage - Conqur"
    >
      <h1
        className="font-semibold text-logo-font tablet-sm:font-bold"
        title="Conqur (Logo) - Empowering Freelancers one task at a time"
      >
        Conqur
      </h1>
      <Link
        href="#join-waitlist"
        className="my-cta-btn"
        title="Go to Join waitlist section"
      >
        Join Waitlist
      </Link>
    </header>
  );
}
