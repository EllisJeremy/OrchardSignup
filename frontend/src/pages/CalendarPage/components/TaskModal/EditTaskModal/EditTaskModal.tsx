import styles from "../TaskModal.module.css";
import TaskCreator from "../TaskCreator/TaskCreator";
import { modalStore } from "../../../calendarStore";
import x from "../../../../../assets/X.svg";

export default function EditTaskModal() {
  const { editTaskModal, openCloseEditTaskModal, openCloseTaskModal } = modalStore();

  if (!editTaskModal) {
    return null;
  }
  return (
    <>
      <div
        className={styles.overlayDiv}
        onClick={() => {
          openCloseEditTaskModal();
          openCloseTaskModal();
        }}
      />
      <div className={styles.modalDiv} style={{ height: "260px" }}>
        <div className={styles.headerDiv}>
          Edit Task / Event
          <button
            className={styles.buttonExit}
            onClick={() => {
              openCloseEditTaskModal();
              openCloseTaskModal();
            }}
          >
            <img className={styles.X} src={x} />
          </button>
        </div>
        <TaskCreator />
      </div>
    </>
  );
}
