import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Calendar } from "./Calendar";
import UpcomingDates from "./UpcomingDates";

const CalendarSection = () => {
  return (
    <Card className="w-full h-fit">
      <CardHeader className="bg-[#f4f4f5] w-full justify-between border border-borders">
        <CardTitle className="text-2xl font-bold ">
          Calendar At-a-Glance
        </CardTitle>
        <div className="flex text-secondary font-bold text-sm">
          <a href="#">View Full Compliance Calendar</a>
          <ChevronRightIcon className="h-5" />
        </div>
      </CardHeader>
      <CardContent className="flex w-full">
        <section className="border-borders border-r  w-full">
          <UpcomingDates
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
