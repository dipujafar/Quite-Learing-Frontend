import Container from "@/components/shared/Container";
import DashboardNavLinks from "@/components/shared/DashboardNavLinks";
import { ReactNode } from "react";

const navLinks = [
  {
    label: "Profile",
    link: "/student/profile",
  },
  {
    label: "Task Management ",
    link: "/student/task-management",
  },
  {
    label: "Settings",
    link: "/student/settings",
  },
];



export default function StudentTemplate({ children }: { children: ReactNode }) {
  return (
    <Container className=" px-0.5 md:px-0.5 lg:px-0.5   xl:px-0.5 py-0.5  bg-linear-to-r from-[#fdf6da] via-[#f5e6b0] to-[#D2B450]">
      <div className=" bg-white  px-2 md:px-6 lg:px-8   xl:px-16 lg:py-14 py-5  flex flex-col lg:flex-row gap-5 ">
        {/* dashboard  navLinks */}
        <div className="lg:w-[25%]">
          <DashboardNavLinks data={navLinks} />
        </div>
        {/* children */}
        <div className="flex-1">{children}</div>
      </div>
    </Container>
  );
}
