import styles from "./Task.module.css";
import { taskStore } from "../../../calendarStore";
import { useAuthStore } from "../../../../../globalStores/useAuthStore";
import trash from "../../../../../assets/trash.svg";
import check from "../../../../../assets/check.svg";
// import edit from "../../../../../assets/edit.svg";
import XFat from "../../../../../assets/XFat.svg";
import { to12Hour } from "../../../functions/timeFormat";
import { colorMap } from "./colorMap";
import { deleteTask, joinTask, dropTask } from "../../../functions/taskNetwork";
import { useNavigate } from "react-router-dom";

export default function Task() {
  const { date, taskDatabase, triggerReload } = taskStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  if (taskDatabase.has(date)) {
    const tasks = taskDatabase.get(date)!;
    return (
      <>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskCardDiv}>
            {user?.isAdmin && (
              <div className={styles.adminBarDiv}>
                {/* 
                <button
                  className={styles.editButton}
                  title="Edit"
                  onClick={async () => {
                    // await deleteTask(task.id);
                    // triggerReload();
                  }}
                >
                  <img className={styles.trash} src={edit} />
                </button>
                */}
                <button
                  className={styles.trashButton}
                  title="Delate"
                  onClick={async () => {
                    await deleteTask(task.id);
                    triggerReload();
                  }}
                >
                  <img className={styles.trash} src={trash} />
                </button>
              </div>
            )}
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
                    <div className={styles.signupDiv}>
                      <p className={styles.owner}>
                        {task.ownerName ? task.ownerName : "available"}
                      </p>

                      {taskDatabase.get(date)![index].ownerId === null && (
                        <button
                          className={styles.selectButton}
                          onClick={async () => {
                            if (!user) {
                              navigate("/");
                            }
                            await joinTask(task.id);
                            triggerReload();
                          }}
                        >
                          signup
                          <img className={styles.plus} src={check} />
                        </button>
                      )}
                      {taskDatabase.get(date)![index].ownerId === user?.id && (
                        <button
                          className={styles.dropButton}
                          onClick={async () => {
                            await dropTask(task.id);
                            triggerReload();
                          }}
                        >
                          drop task
                          <img className={styles.plus} src={XFat} />
                        </button>
                      )}
                    </div>
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
