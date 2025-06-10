export function getStartingDay(month: number, year:number){
  //Zeller's Congruence

  if (month <= 2){
    month += 12;
    year -= 1;
  }

  const century: number = Math.floor(year / 100);
  const twoDigestsOfYear: number = year % 100;

  const startingDay: number = 
  (1 + Math.floor( (13 * (month+1) ) / 5) + twoDigestsOfYear + Math.floor(twoDigestsOfYear / 4) + 5 - century ) % 7;

  // + 7 mod 7 to ensure the result is +
  //console.log((startingDay + 7) % 7);
  
  return (startingDay + 7) % 7; 
}

export function getEndingDay(startingDay: number, daysInMonth: number){

  //console.log((-startingDay - daysInMonth) % 7);
  return(
    (7 - ((startingDay + daysInMonth) % 7) )%7    
  )
}

export function getDaysInMonth(year: number, month: number) {
  //because the day is 0, this will give us the last day of the previous month
  //months start at january = 0
  //for example for month 3 (april) this will return then 0th day of april which is the last day of march
  return new Date(year, month , 0).getDate();
}
