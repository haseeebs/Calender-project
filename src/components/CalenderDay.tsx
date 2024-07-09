import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import { useMemo, useState } from "react";

const CalendarDay = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const calendarDays = useMemo(() => {
    const firstWeekStart = startOfWeek(startOfMonth(selectedMonth));
    const lastWeekEnd = endOfWeek(endOfMonth(selectedMonth));
    return eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd });
  }, [selectedMonth]);

  return (
    <>
      {calendarDays.map((day) => (
        <div className="day non-month-day old-month-day" key={day.getTime()}>
          <div className="day-header">
            <div className="week-name">{day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
            <div className="day-number">{day.getDate()}</div>
            <button className="add-event-btn">+</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CalendarDay;
