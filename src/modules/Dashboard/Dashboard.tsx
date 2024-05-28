import { useState } from "react";
import AssesmentLogo from "../../components/AssesmentLogo";
import CalendarLogo from "../../components/CalendarLogo";
import CalendarSection from "../../components/CalendarSection";
import CardOptions from "../../components/CardOptions";
import EmployerDetailsCard from "../../components/EmployerDetailCard";
import GeneralEmployerNotes from "../../components/GeneralEmployerNotes";
import PlanningLogo from "../../components/PlanningLogo";
import Drawer from "../../components/Drawer";

const Dashboard = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <article className="flex flex-col p-6 space-y-8 items-stretch h-full">
      <h3 className="text-3xl font-medium">Acme Brick Dashboard</h3>
      <section id="row1" className="flex w-full h-full gap-8">
        <div>
          <EmployerDetailsCard
            employer={{
              latestActivity: "BCSPro Analysis Report Downloaded",
              name: "Acme Brick",
              ein: " 12-3456789",
              planYearStart: "01/01/2023",
              primaryContact: "Grace Adler",
              emails: ["gadler@acmebrick.com, hadams@acme...,"],
            }}
            openDrawer={setOpenDrawer}
          />
        </div>
        <CalendarSection
          openDrawer={setOpenDrawer}
          dates={[
            {
              name: "Form 8508 Request",
              id: 1,
              date: new Date("2022-12-01"),
            },
            {
              name: "Form 5500 Due",
              id: 2,
              date: new Date("2022-12-01"),
            },
            {
              name: "Form 8955-SSA Due",
              id: 3,
              date: new Date("2022-12-01"),
            },
          ]}
        />
      </section>
      <section id="row2" className="flex justify-between gap-6">
        <CardOptions
          title="Assessment"
          content="Quickly identify the gaps in compliance for this employer's group health and welfare program."
          buttonText="Return to Assessment"
          logo={<AssesmentLogo className="mx-auto" />}
        />
        <CardOptions
          title="Planning Guide"
          content="Plan the actions needed for compliance throughout the employer’s plan year."
          buttonText="Continue Planning"
          logo={<PlanningLogo className="mx-auto" />}
        />
        <CardOptions
          title="Compliance Calendar"
          content="View or print a compliance calendar specific to this group, and add reminders to clients’ calendar as well as your own."
          buttonText="View Calendar"
          logo={<CalendarLogo className="mx-auto" />}
        />
      </section>
      <section id="row3">
        <GeneralEmployerNotes
          notes={[
            {
              id: 1,
              author: "Gidget Wiggington, Owner",
              lastEdit: "2 days ago",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum facilisis rutrum. Nullam tristique tempor magna sit amet tempus. Class aptent taciti sociosqu ad...",
            },
            {
              id: 2,
              author: "Jennifer Bellafonte, Account Manager",
              lastEdit: "Today",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum facilisis rutrum. Nullam tristique tempor magna sit amet tempus. Class aptent taciti sociosqu ad...",
            },
            {
              id: 3,
              author: "John Doe, Sales Manager",
              lastEdit: "Aug 17, 2023",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum facilisis rutrum. Nullam tristique tempor magna sit amet tempus. Class aptent taciti sociosqu ad...",
            },
          ]}
        />
      </section>
      {openDrawer && (
        <Drawer
          isOpen={openDrawer}
          onRequestClose={() => setOpenDrawer(false)}
        />
      )}
    </article>
  );
};

export default Dashboard;
