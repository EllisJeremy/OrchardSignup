import styles from "./Task.module.css";
import { taskStore } from "../../../calendarStore";
import trash from "../../../../../assets/trash.svg";
import check from "../../../../../assets/check.svg";
import XFat from "../../../../../assets/XFat.svg";
import { to12Hour } from "../../../functions/timeFormat";
import { colorMap } from "./colorMap";

const adminTitle: React.CSSProperties = { gridColumn: "2 / span 2" };

export default function TaskCreator() {
  const { date, taskDatabase, admin, owner, removeTask, setRender } = taskStore();

  if (taskDatabase.has(date)) {
    const tasks = taskDatabase.get(date)!;

    return (
      <>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskCreatorDiv}>
            {admin && (
              <button className={styles.trashButton} onClick={() => removeTask(date, index)}>
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
              style={task.type === "Event" ? {} : { gridColumn: "1 / span 4" }}
            >
              {task.description}
            </p>

            {task.type === "Event" && taskDatabase.get(date)![index].owner === "" && (
              <button
                className={styles.selectButton}
                onClick={() => {
                  taskDatabase.get(date)![index].owner = owner;
                  setRender();
                }}
              >
                <img className={styles.plus} src={check} />
              </button>
            )}

            {task.type === "Event" && taskDatabase.get(date)![index].owner !== "" && (
              <>
                <p className={styles.owner}>{taskDatabase.get(date)![index].owner}</p>
                <button
                  className={styles.unSelectButton}
                  onClick={() => {
                    taskDatabase.get(date)![index].owner = "";
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
