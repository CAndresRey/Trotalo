import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

type EmployerDetails = {
  latestActivity: string;
  name: string;
  ein: string;
  planYearStart: string;
  primaryContact: string;
  emails: string[];
};

type EmployerDetailsCardProps = {
  employer: EmployerDetails;
  openDrawer: (arg0: boolean) => void;
};

const EmployerDetailsCard: React.FC<EmployerDetailsCardProps> = ({
  employer,
  openDrawer: onRequestClose,
}) => {
  return (
    <Card className="w-full h-full">
      <CardHeader className="bg-[#f4f4f5] w-full min-w-[456px] justify-between border border-borders">
        <CardTitle className="text-2xl font-bold ">Employer Details</CardTitle>
        <div
          onClick={() => onRequestClose(true)}
          className="text-secondary font-bold text-sm"
        >
          Edit
        </div>
      </CardHeader>
      <CardContent className="mt-3 p-3 flex flex-col md:flex-row md:space-x-4 ">
        <div className="text-sm font-bold space-y-3 mt-2">
          <p>Latest Activity:</p>
          <p>Employer Name:</p>
          <p>EIN:</p>
          <p>Plan Year Start:</p>
          <p>Primary Contact:</p>
          <p>Employer Emails:</p>
        </div>
        <div className="text-sm font-medium space-y-3">
          <div
            onClick={() => onRequestClose(true)}
            className="flex font-bold text-secondary rounded-xl items-center bg-ligth px-3 py-1 cursor-pointer"
          >
            <p>{employer.latestActivity}</p>{" "}
            <ChevronRightIcon className="h-5" />
          </div>
          <p>{employer.name}</p>
          <p>{employer.ein}</p>
          <p>{employer.planYearStart}</p>
          <p>{employer.primaryContact}</p>
          <div onClick={() => onRequestClose(true)}>
            <p className="text-secondary my-3">{employer.emails.join(", ")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployerDetailsCard;
