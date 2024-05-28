export type Appointments = {
  name: string;
  date: Date;
  id: number;
};
export type UpcomingDatesProps = {
  dates: Appointments[];
};
const UpcomingDates: React.FC<UpcomingDatesProps> = ({ dates }) => {
  return (
    <div className="w-full items-center flex-col p-3">
      {dates.length > 0 ? (
        <>
          <h5 className="text-[#495057] my-6 ">
            There are {dates.length} upcoming due dates.
          </h5>
          {dates.map((date) => (
            <div
              key={date.id}
              className="flex justify-between gap-2 mb-2 bg-[#FFF3CD] text-secondary font-bold py-2 px-4 rounded-full min-w-64"
            >
              <p className="overflow-ellipsis overflow-hidden">{date.name}</p>
              <p>
                {date.date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })}
              </p>
            </div>
          ))}
        </>
      ) : (
        <p>
          Due dates will populate once you’ve completed this employer’s
          <span className="text-secondary cursor-pointer">
            {" "}
            Assessment{" "}
          </span>{" "}
          and{" "}
          <span className="text-secondary cursor-pointer">Planning tools</span>.
        </p>
      )}
    </div>
  );
};

export default UpcomingDates;
