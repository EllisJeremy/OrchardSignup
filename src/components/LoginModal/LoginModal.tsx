import styles from './LoginModal.module.css'

import { dateStore, modalStore } from "../../store"
import monthToString from '../../globalTypescript/monthToString';
import x from '../.././assets/X.svg'

export default function TaskModal() {

  const {loginModal, openCloseLoginModal} = modalStore();
  const {currentDay, month} = dateStore();

  if (!loginModal) {
    return null
  }
  return (
    <>
      <div className={styles.overlayDiv} onClick={() => {openCloseLoginModal()}} />
      <div className={styles.modalDiv}>
        <div className={styles.headerDiv}>
          {monthToString(month)} {currentDay}
          <button className={styles.buttonExit} onClick={openCloseLoginModal}>
            <img className={styles.X} src={x}/>
          </button>
        </div>
        

          
          
          

        
      </div>
    </>
  )
}