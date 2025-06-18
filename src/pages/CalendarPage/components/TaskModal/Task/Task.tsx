import styles from "./Task.module.css";
import { taskStore } from "../../../calendarStore";
import trash from "../../../../../assets/trash.svg";
import check from "../../../../../assets/check.svg";
import XFat from "../../../../../assets/XFat.svg";
//test

const colorMap: Record<string, React.CSSProperties> = {
  Red: {
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    borderColor: "rgba(255, 0, 0, .0)",
  },
  Orange: {
    backgroundColor: "rgba(255, 123, 0, .5)",
    borderColor: "rgba(255, 123, 0, .0)",
  },
  Yellow: {
    backgroundColor: "rgba(247, 190, 39, .5)",
    borderColor: "rgba(247, 190, 39, .0)",
  },
  Green: {
    backgroundColor: "rgba(0, 124, 37, .5)",
    borderColor: "rgba(0, 124, 37, .0)",
  },
  Blue: {
    backgroundColor: "rgba(0, 180, 255, .5)",
    borderColor: "rgba(0, 180, 255, .0)",
  },
  Purple: {
    backgroundColor: "rgba(138, 100, 226, .5)",
    borderColor: "rgba(138, 100, 226, 0)",
  },
};

const adminTitle: React.CSSProperties = { gridColumn: "2 / span 2" };

export default function TaskCreator() {
  const { date, taskDatabase, admin, owner, removeTask, setRender } =
    taskStore();

  if (taskDatabase.has(date)) {
    const tasks = taskDatabase.get(date)!;

    return (
      <>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskCreatorDiv}>
            {admin && (
              <button
                className={styles.trashButton}
                onClick={() => removeTask(date, index)}
              >
                <img className={styles.trash} src={trash} />
              </button>
            )}

            <p
              className={styles.title}
              style={
                admin
                  ? { ...colorMap[task.color], ...adminTitle }
                  : colorMap[task.color]
              }
            >
              {task.title}
            </p>

            <p className={styles.dueTime}>{task.dueTime}</p>
            <p
              className={styles.description}
              style={task.signup ? {} : { gridColumn: "1 / span 4" }}
            >
              {task.description}
            </p>

            {task.signup && taskDatabase.get(date)![index].owner === "" && (
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

            {task.signup && taskDatabase.get(date)![index].owner !== "" && (
              <>
                <p className={styles.owner}>
                  {taskDatabase.get(date)![index].owner}
                </p>
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
