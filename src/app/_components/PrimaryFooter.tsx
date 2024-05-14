import Link from "next/link";
import { FacebookIcon } from "../_assets/FacebookIcon";
import TwitterIcon from "../_assets/TwitterIcon";
import { InstagramIcon } from "../_assets/InstagramIcon";

export default function PrimaryFooter() {
  return (
    <section className="bg-sec-text text-bg px-page-margin-x py-11 flex items-center justify-between tablet:flex-col tablet:gap-y-10 mobile-sm:items-start">
      {/* Footer Left */}
      <div className="flex flex-col gap-10 tablet:items-center mobile-sm:items-start">
        <div className="flex flex-col gap-1 tablet:items-center mobile-sm:items-start">
          <h3 className="text-xl font-bold tablet:text-center mobile-sm:text-left">
            Conqur
          </h3>
          <h5 className="text-base font-semibold tablet:text-center mobile-sm:text-left">
            Empowering Freelancers, One Task at a Time.
          </h5>
        </div>
        <div className="text-2xl flex items-center gap-x-11">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
      {/* Footer Right */}
      <div className="flex items-center gap-x-11 laptop-sm:gap-x-7 mobile-sm:flex-col mobile-sm:items-start mobile-sm:gap-y-10">
        <Link href="#" className="duration-200 hover:text-secondary">
          Terms & Conditions
        </Link>
        <Link href="#" className="duration-200 hover:text-secondary">
          Privacy Policy
        </Link>
      </div>
    </section>
  );
}
