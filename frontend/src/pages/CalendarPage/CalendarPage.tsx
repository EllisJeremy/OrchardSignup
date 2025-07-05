
import CalendarHeaderMonths from './components/CalendarHeaderMonths/CalendarHeaderMonths.tsx';
import CalendarHeaderDays from './components/CalendarHeaderDays/CalendarHeaderDays.tsx';
import Calendar from './components/Calendar/Calendar.tsx';
import TaskModal from './components/TaskModal/TaskModal.tsx';
import LoginModal from './components/LoginModal/LoginModal.tsx';

export default function CalendarPage() {
  return (
    <>
      <div className='calendar'>
        <CalendarHeaderMonths />
        <CalendarHeaderDays />
        <Calendar />
        <TaskModal />
        <LoginModal />
      </div>
    </>
  );
}