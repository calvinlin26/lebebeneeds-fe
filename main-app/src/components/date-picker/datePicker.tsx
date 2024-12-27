import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar/based";
import { Popover, PopoverContent, PopoverTrigger } from "../popover/based";

interface DatePickerWithRangeProps {
  value?: Date;
  className?: string;
  numberOfMonths?: number;
  placeholder?: string;
  disabled?: boolean;
  icon?: boolean;
  name?: string; // Name prop for form handling
  onChange?: (event: {
    target: { value: Date | undefined; name: string | undefined };
  }) => void; // Updated onChange prop type
}
function DatePicker({
  value,
  className,
  placeholder = "Pick a date",
  disabled = false,
  name,
  onChange,
  icon = false,
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<Date>();

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    if (onChange) {
      onChange({ target: { value: newDate, name } });
    }
  };
  return (
    <div className="w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            disabled={disabled}
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
          >
            {icon && <CalendarIcon />}
            {value
              ? format(value, "PPP")
              : date
              ? format(date, "PPP")
              : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
