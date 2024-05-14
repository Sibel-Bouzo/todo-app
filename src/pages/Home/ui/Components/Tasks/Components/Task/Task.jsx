/* eslint-disable react/prop-types */
import "./Task.css";
import toast from "react-hot-toast";
import { useGlobalContext } from "../../../../../../../contexts/context";

export const Task = ({ title, details, id, category, completed, date }) => {
  const { deleteTask, toggleTask } = useGlobalContext();
  return (
    <div className="task text-foreground dark:rounded[3px] dark:border dark:border-white dark:border-solid">
      <div className="task-cat bg-background rounded flex align-middle">
        {category ? (
          <box-icon
            name={category.icon}
            size="sm"
            color="currentColor"
          ></box-icon>
        ) : (
          <box-icon name="question-mark" color="currentColor"></box-icon>
        )}
      </div>
      <div className="task-info">
        <div className="task-info-headers mb-2">
          <h3
            style={{
              textDecoration: completed
                ? "line-through solid #36ba45 3px"
                : "none",
            }}
          >
            {title}
          </h3>
          <h4>{new Date(date).toDateString()}</h4>
        </div>
        <p>{details ? details : "No Details"}</p>
      </div>
      <div className="task-buttons">
        <button
          onClick={() => {
            toggleTask(id);
            !completed
              ? toast("Good Job!", {
                  icon: "👏",
                })
              : "";
          }}
          className="mt-1"
        >
          {completed ? (
            <box-icon
              type="solid"
              name="check-square"
              color="#36ba45"
            ></box-icon>
          ) : (
            <box-icon name="check" color="#36ba45"></box-icon>
          )}
        </button>
        <button
          onClick={() => {
            deleteTask(id);
            toast("Task Deleted", {
              icon: (
                <box-icon
                  name="trash-alt"
                  type="solid"
                  color="var(--destructive)"
                ></box-icon>
              ),
            });
          }}
        >
          <box-icon name="trash-alt" color="var(--destructive)"></box-icon>
        </button>
      </div>
    </div>
  );
};
