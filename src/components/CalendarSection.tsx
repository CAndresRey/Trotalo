import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Calendar } from "./Calendar";
import UpcomingDates from "./UpcomingDates";
import { Appointments } from './UpcomingDates';

type CalendarSectionProps = {
  openDrawer: (arg0: boolean) => void;
  dates: Appointments[];
};

const CalendarSection: React.FC<CalendarSectionProps> = ({ openDrawer, dates }) => {
  return (
    <Card className="w-full h-fit">
      <CardHeader className="bg-[#f4f4f5] w-full justify-between border border-borders">
        <CardTitle className="text-2xl font-bold ">
          Calendar At-a-Glance
        </CardTitle>
        <div className="flex text-secondary font-bold text-sm cursor-pointer">
          <div onClick={() => openDrawer(true)}>
            View Full Compliance Calendar
          </div>
          <ChevronRightIcon className="h-5" />
        </div>
      </CardHeader>
      <CardContent className="flex w-full">
        <section className="border-borders border-r  w-full">
          <UpcomingDates
            dates={dates}
          />
        </section>
        <section className="w-full">
          <Calendar
            appointments={[new Date("2022-12-01"), new Date("2024-05-07")]}
          />
        </section>
      </CardContent>
    </Card>
  );
};

export default CalendarSection;
