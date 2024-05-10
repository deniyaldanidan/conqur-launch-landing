import Link from "next/link";
import { FacebookIcon } from "../_assets/FacebookIcon";
import TwitterIcon from "../_assets/TwitterIcon";
import { InstagramIcon } from "../_assets/InstagramIcon";

export default function PrimaryFooter() {
  return (
    <section className="bg-sec-text text-bg px-page-margin-x py-11 flex items-center justify-between">
      {/* Footer Left */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h3 className=" text-xl font-bold">Conqur</h3>
          <h5 className="text-base font-semibold">
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
      <div className="flex items-center gap-x-11">
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
