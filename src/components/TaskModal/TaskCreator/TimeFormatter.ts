import { taskStore } from '../../../store'
const { setHour, setMinute, setDueTime, } = taskStore();

// valid inputs for time
const validHour0 = new Set<string>();
validHour0.add("0");
validHour0.add("1");

const validHour1 = new Set<string>();
for (let i: number = 0; i <= 9; i++) {
  validHour1.add(i.toString());
};

// convert the string from the hour input into correct format
export const formatHour = (hour: string) => {
  // user entered a valid hour 
  if (hour.length == 2 && validHour0.has(hour[0]) && validHour1.has(hour[1])) {
    setHour(hour);
  }
  // user entered a valid hour but did not include 0 padding
  else if (hour.length == 1 && validHour1.has(hour)) {
    setHour("0" + hour);
  }
  // user entered nothing valid
  else {
    setHour("12");
  }
  // ensure due time matches change to hour
  setDueTime();
}

// valid inputs for time
const validMinute0 = new Set<string>();
for (let i: number = 1; i <= 6; i++) {
  validMinute0.add(i.toString());
};
const validMinute1 = new Set<string>();
for (let i: number = 1; i < 10; i++) {
  validMinute1.add(i.toString());
};

// convert the string from the minute input into correct format
export const formatMinute = (minute: string) => {
  // user entered a valid minute 
  if (minute.length == 2 && validMinute0.has(minute[0]) && validMinute1.has(minute[1])) {
    setMinute(minute)
  }
  // user entered a valid minute but did not include 0 padding
  else if (minute.length == 1 && validMinute1.has(minute)) {
    setMinute("0" + minute);
  }
  // user entered nothing valid
  else {
    setMinute("00")
  }
  // ensure due time matches change to hour
  setDueTime();
}