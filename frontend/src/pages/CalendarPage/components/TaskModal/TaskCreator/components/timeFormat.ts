export const formatHour = (input: string): string => {
  const num = parseInt(input, 10);

  if (!isNaN(num) && num >= 1 && num <= 12) {
    return num.toString().padStart(2, "0");
  } else {
    return "12";
  }
};

export const formatMinute = (input: string) => {
  const num = parseInt(input, 10);

  if (!isNaN(num) && num >= 0 && num <= 59) {
    return num.toString().padStart(2, "0");
  } else {
    return "00";
  }
};
