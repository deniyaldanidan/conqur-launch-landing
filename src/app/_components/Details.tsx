import SectionBadge from "@/app/_components/SectionBadge";
import Link from "next/link";

export default function Details() {
  return (
    <section className="px-page-margin-x py-section-pad-y flex justify-between items-start gap-10">
      {/* Left */}
      <div className="flex flex-col items-start gap-y-6 max-w-[650px]">
        <div className="flex flex-col items-start gap-y-2.5">
          <SectionBadge text="discover" />
          <h2 className="text-section-title-font font-bold capitalize text-left">
            Discover Conqur: Your All-in-One Freelance Management Solution
          </h2>
          <h3 className="text-section-subtitle-font font-semibold text-left">
            Efficiency, organization, and productivity redefined: Conqur
            simplifies task management, time tracking, client collaboration, and
            billing for freelance success.
          </h3>
        </div>
        <Link href="#join-waitlist" className="my-cta-btn">
          Join Waitlist
        </Link>
      </div>
      {/* Right */}
      <div className="w-full max-w-[620px] text-justify text-lg flex flex-col gap-y-4 ">
        <p>
          Are you tired of juggling multiple tools and apps to manage your
          freelance work? Say hello to Conqur, the ultimate solution designed to
          streamline your workflow and boost your productivity. With Conqur, you
          can effortlessly manage tasks, projects, clients, and billing all in
          one place. Our intuitive interface and powerful features empower you
          to stay organized, meet deadlines, and achieve freelance success.
        </p>
        <p>
          Built with freelancers in mind, Conqur offers a range of tools and
          functionalities tailored to your unique needs. From flexible time
          tracking options to detailed project insights and seamless
          collaboration features, Conqur is your trusted partner in conquering
          the challenges of freelance life. Experience the freedom to focus on
          your work while Conqur handles the rest. Say goodbye to chaos and
          hello to productivity with Conqur.
        </p>
      </div>
    </section>
  );
}
