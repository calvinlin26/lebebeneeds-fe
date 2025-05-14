import React, { useState, useEffect } from "react";
import DatePicker from "./datePicker";

interface QuickSelectOption {
  label: string;
  value: string;
  days: number;
}

interface DateRangePickerProps {
  modelValue: { start: Date | null; end: Date | null };
  onChange: (value: { start: Date | null; end: Date | null }) => void;
  quickSelectOptions?: QuickSelectOption[];
}

const defaultQuickSelectOptions: QuickSelectOption[] = [
  { label: "7 Hari Terakhir", value: "7days", days: 7 },
  { label: "30 Hari Terakhir", value: "30days", days: 30 },
  { label: "Rentang Waktu", value: "custom", days: 0 },
];

const PresetDateRangePicker: React.FC<DateRangePickerProps> = ({
  modelValue,
  onChange,
  quickSelectOptions = defaultQuickSelectOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("30days");
  const [startDate, setStartDate] = useState<Date | null>(modelValue.start);
  const [endDate, setEndDate] = useState<Date | null>(modelValue.end);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartDate(modelValue.start);
    setEndDate(modelValue.end);
  }, [modelValue]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("id-ID");
  };

  const selectQuickOption = (option: QuickSelectOption) => {
    setSelectedOption(option.value);
    if (option.value !== "custom") {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - option.days);
      setStartDate(start);
      setEndDate(end);
      onChange({ start, end });
      setIsOpen(false);
    }
  };

  const disableFutureDate = (date: Date) => date > new Date();
  const disableInvalidEndDate = (date: Date) => startDate ? date < startDate || disableFutureDate(date) : disableFutureDate(date);

  const updateDateRange = () => {
    if (startDate && endDate) {
      onChange({ start: startDate, end: endDate });
    }
  };

  useEffect(() => {
    updateDateRange()
  }, [startDate, endDate])

  return (
    <div className="w-full relative">
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between px-3 py-2 border rounded-md"
      >
        {startDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : "30 Hari Terakhir"}
      </button>
      {isOpen && (
        <div className="absolute w-96 bg-white border rounded-lg shadow-lg p-3">
          {quickSelectOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => selectQuickOption(option)}
              className={`w-full flex items-center p-2 rounded-lg ${selectedOption === option.value ? "bg-sky-200" : ""}`}
            >
              <span>{option.label}</span>
            </button>
          ))}
          {selectedOption === "custom" && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label>Dari</label>
                <DatePicker value={startDate} onChange={setStartDate} disabledDate={disableFutureDate} />
              </div>
              <div>
                <label>Hingga</label>
                <DatePicker value={endDate} onChange={setEndDate} disabledDate={disableInvalidEndDate} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PresetDateRangePicker;
