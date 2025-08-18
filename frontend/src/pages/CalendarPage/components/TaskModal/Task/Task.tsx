import styles from "./Task.module.css";
import { taskStore } from "../../../calendarStore";
import trash from "../../../../../assets/trash.svg";
import check from "../../../../../assets/check.svg";
import XFat from "../../../../../assets/XFat.svg";
import edit from "../../../../../assets/edit.svg";
import { to12Hour } from "../../../functions/timeFormat";
import { colorMap } from "./colorMap";
import { deleteTask } from "../../../functions/network";

export default function Task() {
  const { date, taskDatabase, admin, setRender, triggerDatabaseReload } = taskStore();

  if (taskDatabase.has(date)) {
    const tasks = taskDatabase.get(date)!;

    return (
      <>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskCardDiv}>
            <div className={styles.adminBarDiv}>
              <button
                className={styles.editButton}
                title="Edit"
                onClick={async () => {
                  await deleteTask(task.id);
                  triggerDatabaseReload();
                }}
              >
                <img className={styles.trash} src={edit} />
              </button>
              <button
                className={styles.trashButton}
                title="Delate"
                onClick={async () => {
                  await deleteTask(task.id);
                  triggerDatabaseReload();
                }}
              >
                <img className={styles.trash} src={trash} />
              </button>
            </div>
            {task.type === "event" ? (
              <div>
                <div className={styles.eventDiv}>
                  <div style={colorMap[task.color]} className={styles.eventTitleDiv}>
                    <p className={styles.title}>{task.title}</p>
                    <p className={styles.time}>
                      {`${to12Hour(task.startTime)} - ${to12Hour(task.endTime!)}`}
                    </p>
                  </div>

                  <p className={styles.description}>{task.description}</p>
                </div>
              </div>
            ) : (
              <div>
                <div className={styles.taskDiv}>
                  <div style={colorMap[task.color]} className={styles.eventTitleDiv}>
                    <p className={styles.title}>{task.title}</p>
                    <p className={styles.time}>{to12Hour(task.startTime)}</p>
                  </div>
                  <div className={styles.taskContentDiv}>
                    <p className={styles.description}>{task.description}</p>
                    {taskDatabase.get(date)![index].owner === null && (
                      <button
                        className={styles.selectButton}
                        onClick={() => {
                          // TODO add user to task
                          setRender();
                        }}
                      >
                        <img className={styles.plus} src={check} />
                      </button>
                    )}

                    {task.type === "task" && taskDatabase.get(date)![index].owner !== null && (
                      <>
                        <p className={styles.owner}>{taskDatabase.get(date)![index].owner}</p>
                        <button
                          className={styles.unSelectButton}
                          onClick={() => {
                            // TODO: remove user from task
                            setRender();
                          }}
                        >
                          <img className={styles.XFat} src={XFat} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </>
    );
  }
}
