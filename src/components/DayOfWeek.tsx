function startingDay(month: number, year:number){
  //Zeller's Congruence
  
  if (month <= 2){
    month += 12;
    year -= 1;
  }

  const century: number = Math.floor(year / 100)
  const twoDigestsOfYear: number = year % 100

  const startingDay: number = 
  (1 + Math.floor( (13 * (month+1) ) / 5) + twoDigestsOfYear + Math.floor(twoDigestsOfYear / 4) + 5 - century ) % 7

  // + 7 mod 7 to ensure the result is +
  return (startingDay + 7) % 7; 
}

export default function DayOfWeek(){
  return(
    <>
      <p>{startingDay(1, 2025)}</p>
      <p>it should be 1</p>
    </>
  )
}