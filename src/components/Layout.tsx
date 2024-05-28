import React, { useState } from "react";
import Header from "./Header";
import { BriefcaseIcon } from "./BriefcaseIcon";
import { CalendarIcon } from "./CalendarIcon";
import { HomeIcon } from "./HomeIcon";
import { LayoutDashboardIcon } from "./LayoutDashboardIcon";
import { SettingsIcon } from "./SettingsIcon";
import SidebarLink from "./SidebarLink";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [active, setActive] = useState("employer-dashboard");

  return (
    <div className="grid grid-rows-layout h-full">
      <Header />
      <main className="grid grid-cols-layout h-full">
        <aside className="bg-light w-64 pt-16 border-r border-borders">
          <nav>
            <SidebarLink
              Icon={ChevronLeftIcon}
              text="All Employers"
              route="/"
              height={"75px"}
              onClick={() => history.back()}
              active={false}
            />
            <SidebarLink
              Icon={HomeIcon}
              text="Employer Dashboard"
              route="/employer-dashboard"
              onClick={() => {
                setActive("employer-dashboard");
              }}
              active={active === "employer-dashboard"}
            />
            <SidebarLink
              Icon={LayoutDashboardIcon}
              text="Intake Questionnaire"
              route="/Questionnaire"
              onClick={() => {
                setActive("questionnaire");
              }}
              active={active === "questionnaire"}
            />
            <SidebarLink
              Icon={BriefcaseIcon}
              text="Assessment"
              route="/assessment"
              onClick={() => {
                setActive("assessment");
              }}
              active={active === "assessment"}
            />
            <SidebarLink
              Icon={CalendarIcon}
              text="Planning Guide"
              route="/planning-guide"
              onClick={() => {
                setActive("planning-guide");
              }}
              active={active === "planning-guide"}
            />
            <SidebarLink
              Icon={CalendarIcon}
              text="Calendar"
              route="/calendar"
              onClick={() => {
                setActive("calendar");
              }}
              active={active === "calendar"}
            />
            <SidebarLink
              Icon={SettingsIcon}
              text="Notes"
              route="/notes"
              onClick={() => {
                setActive("notes");
              }}
              active={active === "notes"}
            />
          </nav>
        </aside>
        <section className="pt-16">
          <div className="container">
            {children}
          </div>
          <div className="bottom-0 left-0 ">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Layout;
