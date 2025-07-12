export const formatHour = (input: string): string => {
  const num = parseInt(input, 10);

  if (!isNaN(num) && num >= 1 && num <= 12) {
    return num.toString().padStart(2, "0");
  }
  return "";
};

export const formatMinute = (input: string) => {
  const num = parseInt(input, 10);

  if (!isNaN(num) && num >= 0 && num <= 59) {
    return num.toString().padStart(2, "0");
  }
  return "";
};

export const to24Hour = (hour: string, minute: string, meridiem: string): string => {
  let h = parseInt(hour, 10);

  if (meridiem === "PM" && h !== 12) h += 12;
  if (meridiem === "AM" && h === 12) h = 0;

  const hourStr = h.toString().padStart(2, "0");
  const minuteStr = minute.padStart(2, "0");

  return `${hourStr}:${minuteStr}:00`;
};

export const to12Hour = (time24: string): string => {
  const [hourStr, minute] = time24.split(":");
  let h = parseInt(hourStr, 10);
  const meridiem = h >= 12 ? "PM" : "AM";

  if (h === 0) h = 12;
  else if (h > 12) h -= 12;

  return `${h}:${minute.padStart(2, "0")} ${meridiem}`;
};
