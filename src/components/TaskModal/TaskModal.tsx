import styles from './TaskModal.module.css'
import { dateStore, modalStore } from "../../store"
import modalTransition from './modalTransition';


export default function TaskModal() {

  const {taskModal, openCloseTaskModal} = modalStore();

  if (!taskModal) {
    return null
  }

  return (
    <>
      <div className={styles.overlayDiv} onClick={() => {openCloseTaskModal(); toggleOverlay()}} />
      <div className={styles.modalDiv}>
        <div className={styles.modalChildDiv}>
          this is the modal
          <button onClick={openCloseTaskModal}>click to close modal</button>
        </div>
      </div>
    </>
  )
}

