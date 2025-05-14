import { useState, useEffect, useRef } from "react";

type DatePickerProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  disabled?: boolean;
  placeholder?: string;
  disabledDate?: (date: Date) => boolean;
  minDate?: Date;
  maxDate?: Date;
  selectedClassname?: string;
  todayClassname?: string;
  hoverClassname?: string;
  containerClassname?: string;
  classname?: string;
  disabledClassname?: string;
};

export default function DatePicker({
  value,
  onChange,
  disabled = false,
  placeholder = "Select date...",
  disabledDate = () => false,
  minDate,
  maxDate,
  selectedClassname = "bg-sky-900 text-white font-semibold",
  todayClassname = "text-sky-900 font-semibold",
  hoverClassname = "hover:bg-sky-200",
  containerClassname = "w-full px-4 py-2 border rounded-md cursor-pointer",
  disabledClassname = "bg-gray-200 text-gray-400",
  classname = "border-gray-300 focus:ring-2 focus:ring-sky-500",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const pickerRef = useRef<HTMLDivElement>(null);

  const weekDays = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const currentMonthName = new Intl.DateTimeFormat("id-ID", {
    month: "long",
  }).format(currentDate);
  const currentYear = currentDate.getFullYear();

  const calendarDays = (() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const start = new Date(firstDay);
    start.setDate(start.getDate() - start.getDay());
    const end = new Date(lastDay);
    end.setDate(end.getDate() + (6 - end.getDay()));
    const days: Date[] = [];
    const current = new Date(start);

    while (current <= end) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  })();

  const isCurrentMonth = (date: Date) =>
    date.getMonth() === currentDate.getMonth();
  const isSelected = (date: Date) =>
    value && date.toDateString() === value.toDateString();
  const isToday = (date: Date) =>
    date.toDateString() === new Date().toDateString();

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return `${day} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const toggleCalendar = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const isDateDisabled = (date: Date) => {
    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0);

    const min = minDate ? new Date(minDate) : null;
    const max = maxDate ? new Date(maxDate) : null;
    min?.setHours(0, 0, 0, 0);
    max?.setHours(23, 59, 59, 999);

    return Boolean(
      disabledDate(date) || (min && dayStart < min) || (max && dayStart > max)
    );
  };

  const selectDate = (date: Date) => {
    if (!isDateDisabled(date)) {
      onChange(date);
      setIsOpen(false);
    }
  };

  const previousMonth = () =>
    setCurrentDate(new Date(currentYear, currentDate.getMonth() - 1, 1));
  const nextMonth = () =>
    setCurrentDate(new Date(currentYear, currentDate.getMonth() + 1, 1));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={pickerRef}>
      <div
        onClick={toggleCalendar}
        className={`${containerClassname} ${
          disabled ? disabledClassname : classname
        }`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`${
              value ? "text-gray-700" : "text-gray-400"
            } text-sm font-semibold`}
          >
            {value ? formatDate(value) : placeholder}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-80 mt-2 bg-white border rounded-md shadow-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <button
              type="button"
              onClick={previousMonth}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center space-x-2">
              <span className="font-semibold">{currentMonthName}</span>
              <select
                value={currentYear}
                onChange={(e) =>
                  setCurrentDate(
                    new Date(
                      parseInt(e.target.value),
                      currentDate.getMonth(),
                      1
                    )
                  )
                }
                className="border border-gray-300 rounded px-1 py-0.5 text-sm"
              >
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - 50 + i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 text-center font-semibold text-gray-400">
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 mt-2">
            {calendarDays.map((date) => (
              <button
                key={date.toISOString()}
                onClick={() => selectDate(date)}
                disabled={isDateDisabled(date)}
                className={`w-8 h-8 text-sm rounded-full focus:outline-none
                ${
                  isDateDisabled(date)
                    ? "text-gray-400 cursor-not-allowed bg-gray-100"
                    : ""
                }
                ${
                  !isDateDisabled(date) && isCurrentMonth(date)
                    ? "text-gray-900"
                    : ""
                }
                ${
                  !isDateDisabled(date) && !isCurrentMonth(date)
                    ? "text-gray-300"
                    : ""
                }
                ${
                  !isDateDisabled(date) && isSelected(date)
                    ? selectedClassname
                    : ""
                }
                ${!isDateDisabled(date) && isToday(date) ? todayClassname : ""}
                ${!isDateDisabled(date) ? hoverClassname : ""}`}
              >
                {date.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
