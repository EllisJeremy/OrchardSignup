import { taskStore } from '../../../calendarStore';
const { setHour, setMinute } = taskStore.getState();

// hour formatter
export const formatHour = (input: string) => {
  const num = parseInt(input, 10);

  if (!isNaN(num) && num >= 1 && num <= 12) {
    setHour(num.toString().padStart(2, '0'));
  } else {
    setHour('12'); // default fallback
  }

};

// minute formatter
export const formatMinute = (input: string) => {
  const num = parseInt(input, 10);

  if (!isNaN(num) && num >= 0 && num <= 59) {
    setMinute(num.toString().padStart(2, '0'));
  } else {
    setMinute('00'); // default fallback
  }

};
