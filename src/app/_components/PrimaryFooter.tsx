import Link from "next/link";
import { FacebookIcon } from "../_assets/FacebookIcon";
import TwitterIcon from "../_assets/TwitterIcon";
import { InstagramIcon } from "../_assets/InstagramIcon";

export default function PrimaryFooter() {
  return (
    <section
      className="bg-sec-text text-bg px-page-margin-x py-11 flex items-center justify-between tablet:flex-col tablet:gap-y-10 mobile-sm:items-start"
      aria-label="WebPage Primary Footer"
    >
      {/* Footer Left */}
      <div className="flex flex-col gap-10 tablet:items-center mobile-sm:items-start">
        <div className="flex flex-col gap-1 tablet:items-center mobile-sm:items-start">
          <h3
            className="text-xl font-bold tablet:text-center mobile-sm:text-left"
            aria-label="footer logo"
          >
            Conqur
          </h3>
          <h4
            className="text-base font-semibold tablet:text-center mobile-sm:text-left"
            aria-label="footer logo description"
          >
            Empowering Freelancers, One Task at a Time.
          </h4>
        </div>
        <div
          className="flex items-center gap-x-11"
          aria-label="website social links"
        >
          <Link
            href="#"
            className="text-2xl cursor-pointer"
            title="Facebook Social Icon"
            aria-label="Facebook Social Icon"
          >
            <FacebookIcon aria-label="Facebook Logo" />
          </Link>
          <Link
            href="#"
            className="text-2xl cursor-pointer"
            title="Twitter Social Icon"
            aria-label="Twitter Social Icon"
          >
            <TwitterIcon aria-label="Twitter aka X Logo" />
          </Link>
          <Link
            href="#"
            className="text-2xl cursor-pointer"
            title="Instagram Social Icon"
            aria-label="Instagram Social Icon"
          >
            <InstagramIcon aria-label="Instagram Logo" />
          </Link>
        </div>
      </div>
      {/* Footer Right */}
      <nav
        className="flex items-center gap-x-11 laptop-sm:gap-x-7 mobile-sm:flex-col mobile-sm:items-start mobile-sm:gap-y-10"
        aria-label="Footer navigation"
      >
        <Link href="#" className="duration-200 hover:text-secondary">
          Terms & Conditions
        </Link>
        <Link href="#" className="duration-200 hover:text-secondary">
          Privacy Policy
        </Link>
      </nav>
    </section>
  );
}
