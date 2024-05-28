import { format } from "date-fns";

interface CalendarProps {
  appointments: Date[];
}

export const Calendar = ({ appointments }: CalendarProps) => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const appointmentDays = appointments.map((appointment) =>
    appointment.getDate()
  );

  return (
    <div className="bg-white dark:bg-gray-900 w-full p-3">
      <div className="grid grid-cols-7 gap-2 text-center w-full">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-gray-500 dark:text-gray-400 w-full  text-sm "
          >
            {day}
          </div>
        ))}
        {days.map((day) => {
          const today = Number(format(new Date(), "d"));
          return (
            <div
              key={day}
              className={
                day === today
                  ? "bg-[#F4F4F5] rounded-full  p-2 text-sm w-full text-center"
                  : appointmentDays.includes(day)
                  ? "bg-[#FFF3CD] rounded-full p-2 text-secondary text-center font-bold text-sm w-full"
                  : "bg-gray-100 dark:bg-gray-800 rounded-full p-2 text-sm text-center"
              }
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};
