import styles from "./Task.module.css";
import { taskStore } from "../../../calendarStore";
import trash from "../../../../../assets/trash.svg";
import check from "../../../../../assets/check.svg";
import XFat from "../../../../../assets/XFat.svg";
import { to12Hour } from "../../../functions/timeFormat";
import { colorMap } from "./colorMap";
import { deleteTask } from "../../../functions/network";

export default function TaskCreator() {
  const { date, taskDatabase, admin, setRender, triggerDatabaseReload } = taskStore();

  if (taskDatabase.has(date)) {
    const tasks = taskDatabase.get(date)!;

    return (
      <>
        {tasks.map((task, index) => (
          <div
            key={index}
            className={styles.taskCreatorDiv}
            style={task.type === "event" ? { gridTemplateRows: "25px 25px" } : {}}
          >
            {/** 
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
              */}

            <p className={styles.title} style={colorMap[task.color]}>
              {task.title}
            </p>

            <div className={styles.time}>
              {to12Hour(task.startTime)}
              {task.endTime ? ` - ${to12Hour(task.endTime)}` : ""}
            </div>

            <p className={styles.description}>{task.description}</p>
            {task.type === "s" && taskDatabase.get(date)![index].owner === null && (
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
