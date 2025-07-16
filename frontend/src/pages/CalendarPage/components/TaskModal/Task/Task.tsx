import styles from "./Task.module.css";
import { taskStore } from "../../../calendarStore";
import trash from "../../../../../assets/trash.svg";
import check from "../../../../../assets/check.svg";
import XFat from "../../../../../assets/XFat.svg";
import { to12Hour } from "../../../functions/timeFormat";
import { colorMap } from "./colorMap";
import { deleteTask } from "../../../functions/network";

const adminTitle: React.CSSProperties = { gridColumn: "2 / span 2" };

export default function TaskCreator() {
  const { date, taskDatabase, admin, setRender, triggerDatabaseReload } = taskStore();

  if (taskDatabase.has(date)) {
    const tasks = taskDatabase.get(date)!;

    return (
      <>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskCreatorDiv}>
            {admin && (
              <button
                className={styles.trashButton}
                onClick={async () => {
                  await deleteTask(task.id);
                  triggerDatabaseReload();
                }}
              >
                <img className={styles.trash} src={trash} />
              </button>
            )}

            <p
              className={styles.title}
              style={admin ? { ...colorMap[task.color], ...adminTitle } : colorMap[task.color]}
            >
              {task.title}
            </p>

            <p className={styles.dueTime}>{to12Hour(task.startTime)}</p>
            <p
              className={styles.description}
              style={task.type === "task" ? {} : { gridColumn: "1 / span 4" }}
            >
              {task.description}
            </p>
            {task.type === "task" && taskDatabase.get(date)![index].owner === null && (
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
        ))}
      </>
    );
  }
}
