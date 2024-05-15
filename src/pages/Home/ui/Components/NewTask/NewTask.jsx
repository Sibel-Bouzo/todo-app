import { categories } from "../../../../../data/data";
import "./NewTask.css";
import { Nav } from "../../../../../components/Layout/Components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import toast from "react-hot-toast";
import { useGlobalContext } from "../../../../../contexts/context";
import "boxicons";

export const NewTask = () => {
  const {
    taskTitle,
    setTaskTitle,
    taskDetails,
    setTaskDetails,
    selectedCat,
    setSelectedCat,
    addTask,
    date,
    setDate,
  } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
    toast("Task Added", {
      icon: <box-icon name="check" color="#36ba45"></box-icon>,
    });
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className="new-task container text-foreground">
        <h2 className="font-bold dark:text-popover">Create New Task</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-8 flex-col md:flex-row">
            <div className="flex flex-col gap-4 flex-1">
              <input
                required
                type="text"
                id="task-title"
                className="border-radius dark:border dark:border-white dark:border-solid"
                placeholder="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <textarea
                className="border-radius dark:border dark:border-white dark:border-solid"
                placeholder="Task Details"
                value={taskDetails}
                onChange={(e) => setTaskDetails(e.target.value)}
              />
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border "
            />
          </div>
          <h3 className="mt-2 font-semibold">Select Category</h3>
          <div className="categories">
            {categories?.map((category, index) => {
              return (
                <div
                  className={
                    selectedCat === category
                      ? "category selected rounded-s dark:border dark:border-white dark:border-solid dark:shadow-none"
                      : "category rounded-sm dark:border dark:border-white dark:border-solid dark:shadow-none"
                  }
                  key={index}
                  onClick={() => setSelectedCat(category)}
                >
                  <box-icon
                    name={category.icon}
                    size="sm"
                    color="currentColor"
                  ></box-icon>
                  {category.title}
                </div>
              );
            })}
          </div>
          <div className="new-task-buttons">
            <Link to="/todo-app">
              <button className="back-arrow py-0">
                <box-icon
                  name="left-arrow-alt"
                  color="var(--popover)"
                  size="28px"
                ></box-icon>
              </button>
            </Link>
            <button className="create-task" type="submit">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
