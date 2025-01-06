
import Header from './components/Header/Header.tsx';
import CalendarHeader from './components/CalendarHeader/CalendarHeader.tsx';
import Calendar from './components/Calendar/Calendar.tsx';



export default function App() {
  
  return (
    <>
      <Header />
      <div className='calendar'>
        <CalendarHeader />
        <Calendar />
      </div>
    </>
  );
}