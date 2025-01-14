import styles from './TaskModal.module.css'
import TaskCreator from './TaskCreator/TaskCreator';
import Task from './Task/Task';
import { dateStore, modalStore } from "../../store"
import monthToString from '../../globalTypescript/monthToString';
//import styles2 from '../Calendar/Calendar.module.css'
export default function TaskModal() {

  const {taskModal, openCloseTaskModal} = modalStore();
  const {currentDay, month} = dateStore();

  if (!taskModal) {
    return null
  }
  return (
    <>
      <div className={styles.overlayDiv} onClick={() => {openCloseTaskModal()}} />
      <div className={styles.modalDiv}>
        <div className={styles.headerDiv}>
          {monthToString(month)} {currentDay}
          <button className={styles.buttonExit} onClick={openCloseTaskModal}>
            <img className={styles.X} src={'/X.svg'}/>
          </button>
        </div>
        

          <Task />
          <TaskCreator />
          
          

        
      </div>
    </>
  )
}



/*
<div className={styles2.dayContentDiv}>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel1}>task 1</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel2}>task 2</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel1}>task 3</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel2}>+ x more</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel1}>task 1</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel2}>task 2</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel1}>task 3</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel2}>+ x more</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel1}>task 1</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel2}>task 2</p>
          </div>
          <div className={styles2.dayContentChildDiv}>
            <p className={styles2.taskLabel1}>task 3</p>
          </div>
          
        </div>
*/