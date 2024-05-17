import TaskIcon from "@/app/_assets/TaskIcon";
import ClockIcon from "@/app/_assets/ClockIcon";
import NoteIcon from "@/app/_assets/NoteIcon";
import ScheduleIcon from "@/app/_assets/ScheduleIcon";
import BillIcon from "@/app/_assets/BillIcon";
import ChartIcon from "@/app/_assets/ChartIcon";

const featureCardData = [
  {
    title: "Task & Project Management",
    content:
      "Seamlessly organize your tasks and projects, ensuring nothing slips through the cracks. Stay on top of deadlines and priorities with Conqur's intuitive management system.",
    icon: <TaskIcon aria-hidden />,
  },
  {
    title: "Time Tracking Made Easy",
    content:
      "Effortlessly track your time spent on tasks with precision. Gain valuable insights into your productivity and ensure accurate billing with Conqur's built-in time tracking features.",
    icon: <ClockIcon aria-hidden />,
  },
  {
    title: "Client & Project Notes",
    content:
      "Keep detailed notes for each client and project, all in one place. Capture important information, milestones, and project specifics to enhance collaboration and efficiency.",
    icon: <NoteIcon aria-hidden />,
  },
  {
    title: "Flexible Billing Options",
    content:
      "Choose between hourly rates or fixed rates for billable projects. Customize billing settings to suit your preferences and ensure transparent invoicing for your clients.",
    icon: <BillIcon aria-hidden />,
  },
  {
    title: "Interactive Schedule",
    content:
      "Plan your day effectively with Conqur's interactive scheduling feature. Organize tasks for today or tomorrow, track progress, and optimize your workflow for maximum productivity.",
    icon: <ScheduleIcon aria-hidden />,
  },
  {
    title: "Comprehensive Reports & Insights",
    content:
      "Gain valuable insights into your performance with detailed reports. Track time, project progress, earnings, and more with Conqur's comprehensive reporting tools, empowering you to make data-driven decisions.",
    icon: <ChartIcon aria-hidden />,
  },
];

export default featureCardData;
