
import Header from './components/Header/Header.tsx';
import CalendarHeaderMonths from './components/CalendarHeaderMonths/CalendarHeaderMonths.tsx'; 
import CalendarHeaderDays from './components/CalendarHeaderDays/CalendarHeaderDays.tsx';
import Calendar from './components/Calendar/Calendar.tsx';

// 

export default function App() {
  
  return (
    <>
      <Header />
      <div className='calendar'>
        <CalendarHeaderMonths />
        <CalendarHeaderDays /> 
        <Calendar />
      </div>
    </>
  );
}