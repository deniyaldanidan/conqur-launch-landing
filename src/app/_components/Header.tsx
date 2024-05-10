import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-page-margin-x py-2.5 border-b-[0.5px] border-b-primary">
      <div className="font-semibold text-logo-font">Conqur</div>
      <Link href="#join-waitlist" className="my-cta-btn">
        Join Waitlist
      </Link>
    </header>
  );
}
