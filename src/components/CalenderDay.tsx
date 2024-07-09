import { endOfDay, isBefore, isSameMonth } from "date-fns";
import { cc } from "../utils/cc";
import { formatDate } from "../utils/formatDate";

type CalenderDayProps = {
  day: Date;
  showWeekName: boolean;
  selectedMonth: Date
}

const CalendarDay = ({ day, showWeekName, selectedMonth}: CalenderDayProps) => {
  return (
    <>
      <div className={cc("day", !isSameMonth(day, selectedMonth) && 'non-month-day', isBefore(endOfDay(day), new Date()) && 'old-month-day')}>
        <div className="day-header">
          <div className="week-name"> {showWeekName && formatDate(day, { weekday: "short" })} </div>
          <div className="day-number">{formatDate(day, { day: 'numeric' })}</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
    </>
  );
};

export default CalendarDay;
