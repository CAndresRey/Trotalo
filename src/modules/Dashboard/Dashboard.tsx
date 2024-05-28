import AssesmentLogo from "../../components/AssesmentLogo";
import CalendarLogo from "../../components/CalendarLogo";
import CardOptions from "../../components/CardOptions";
import EmployerDetailsCard from "../../components/EmployerDetailCard";
import GeneralEmployerNotes from "../../components/GeneralEmployerNotes";
import PlanningLogo from "../../components/PlanningLogo";

const Dashboard = () => {
  return (
    <>
      <h3 className="text-3xl font-medium">Acme Brick Dashboard</h3>
      <div id="row1" className="flex">
        <EmployerDetailsCard
          employer={{
            latestActivity: "BCSPro Analysis Report Downloaded",
            name: "Acme Brick",
            ein: " 12-3456789",
            planYearStart: "01/01/2023",
            primaryContact: "Grace Adler",
            emails: ["gadler@acmebrick.com, hadams@acme...,"],
          }}
        />
      </div>
      <div id="row2" className="flex justify-between gap-6">
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
      </div>
      <div id="row3">
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
      </div>
    </>
  );
};

export default Dashboard;
