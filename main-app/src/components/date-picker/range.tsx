import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar/based";
import { Popover, PopoverContent, PopoverTrigger } from "../popover/based";

interface DatePickerWithRangeProps {
  className?: string;
  initialRange?: DateRange;
  numberOfMonths?: number;
  placeholder?: string;
  disabled?: boolean;
  name?: string; // Name prop for form handling
  dateFormat?: string;
  onChange?: (event: {
    target: { value: DateRange | undefined; name: string | undefined };
  }) => void; // Updated onChange prop type
}

export default function DatePickerWithRange({
  className,
  initialRange = { from: new Date(), to: addDays(new Date(), 7) }, // Default range
  numberOfMonths = 2, // Default number of months to display
  placeholder = "Pick a date",
  disabled = false,
  dateFormat = "dd LLL y",
  name,
  onChange,
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(initialRange);

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate);
    if (onChange) {
      onChange({ target: { value: newDate, name } });
    }
  };

  return (
    <div className="w-full">
      <Popover>
        <PopoverTrigger asChild disabled={disabled}>
          <Button
            id={name}
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, dateFormat)} -{" "}
                  {format(date.to, dateFormat)}
                </>
              ) : (
                format(date.from, dateFormat)
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        {!disabled && (
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={handleDateChange}
              numberOfMonths={numberOfMonths}
            />
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}
