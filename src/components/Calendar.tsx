interface CalendarProps {
  appointments: Date[];
}

export const Calendar = ({ appointments }: CalendarProps) => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const appointmentDays = appointments.map((appointment) =>
    appointment.getDate()
  );

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Calendar</h2>
        <div className="text-gray-500 dark:text-gray-400">
          {monthNames[month]} {year}
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={
              appointmentDays.includes(day)
                ? "bg-red-500 dark:bg-red-800 rounded-md py-2"
                : "bg-gray-100 dark:bg-gray-800 rounded-md py-2"
            }
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
