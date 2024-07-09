import { formatDate } from "../utils/formatDate";

type CalenderDayProps = {
  day: Date;
  showWeekName: boolean;
  selectedMonth: Date
}

const CalendarDay = ({ day, showWeekName, selectedMonth}: CalenderDayProps) => {
  return (
    <>
      <div className="day non-month-day old-month-day">
        <div className="day-header">
          <div className="week-name"> {showWeekName && formatDate(day, { weekday: "short" })} </div>
          <div className="day-number">{day.getDate()}</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
    </>
  );
};

export default CalendarDay;
