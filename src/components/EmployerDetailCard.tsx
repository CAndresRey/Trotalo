
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
};

const EmployerDetailsCard: React.FC<EmployerDetailsCardProps> = ({
  employer,
}) => {
  return (
    <Card className="min-w-fit">
      <CardHeader className="bg-[#f4f4f5] w-full justify-between border border-borders">
        <CardTitle className="text-2xl font-bold ">Employer Details</CardTitle>
        <a href="#" className="text-secondary font-bold text-sm">
          Edit
        </a>
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
          <a href="#" className="flex font-bold text-secondary rounded-xl items-center bg-ligth px-3 py-1">
            <p>{employer.latestActivity}</p> <ChevronRightIcon className="h-5" />
          </a>
          <p>{employer.name}</p>
          <p>{employer.ein}</p>
          <p>{employer.planYearStart}</p>
          <p>{employer.primaryContact}</p>
          <a href="" >
            <p className="text-secondary my-3">{employer.emails.join(", ")}</p>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployerDetailsCard;
