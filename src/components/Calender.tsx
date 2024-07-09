import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
  } from "date-fns";

import { useMemo, useState } from "react";
import CalanderDay from "./CalenderDay";

const Calender = () => {

    const [selectedMonth, setSelectedMonth] = useState(new Date());

    const calendarDays = useMemo(() => {
      const firstWeekStart = startOfWeek(startOfMonth(selectedMonth));
      const lastWeekEnd = endOfWeek(endOfMonth(selectedMonth));
      return eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd });
    }, [selectedMonth]);
  

  return (
    <>
      <div className="calendar">
        <header className="header flex p-4 w-full items-center mr-2 space-x-4">
          <button className="px-5 py-2 rounded-md hover:bg-slate-200 active:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-100 transition-colors">
            Today
          </button>
          <div>
            <button className="month-change-btn px-4 py-2 rounded-full hover:bg-slate-100 active:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-100 transition-colors">
              &lt;
            </button>
            <button className="month-change-btn px-4 py-2 rounded-full hover:bg-slate-100 active:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-100 transition-colors">
              &gt;
            </button>
          </div>
          <span className="month-title text-lg cursor-grab">July 2023</span>
        </header>

        <div className="days">
          {calendarDays.map( (day, index) => (
            <CalanderDay key={day.getTime()} day={day} showWeekName={ index < 7 } selectedMonth={ selectedMonth }/>
          ) )}
        </div>
      </div>
    </>
  );
};

export default Calender;
