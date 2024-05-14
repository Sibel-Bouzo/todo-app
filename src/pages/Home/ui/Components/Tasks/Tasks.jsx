import { categories } from "@/data/data";
import { Task } from "./Components/Task/Task";
import "./Tasks.css";
import { useGlobalContext } from "../../../../../contexts/context";
import toast from "react-hot-toast";
import "boxicons";

export const Tasks = () => {
  const { tasks, clearTasks, selectedCat, setSelectedCat } = useGlobalContext();

  const handleCategoryChange = (e) => {
    setSelectedCat(e.target.value);
  };

  const filteredTasks = selectedCat
    ? tasks.filter((task) => task.category?.title === selectedCat)
    : tasks;

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between align-middle mt-10 font-bold w-full text-foreground">
        <h3>My Tasks</h3>
        <div className="flex flex-row justify-between mt-5 md:mt-0">
          <select
            className="mr-5 bg-transparent focus:outline-none "
            value={selectedCat}
            onChange={handleCategoryChange}
          >
            <option value="" className="text-black">
              All
            </option>
            {categories.map((category, index) => (
              <option value={category.title} key={index} className="text-black">
                {category.title}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              clearTasks(),
                toast("Tasks Cleared", {
                  icon: (
                    <box-icon name="x" color="var(--destructive)"></box-icon>
                  ),
                });
            }}
            className="font-normal"
          >
            Clear All
          </button>
        </div>
      </div>
      <div className="tasks">
        {filteredTasks?.map((task) => (
          <div key={task.id} style={{ listStyle: "none", paddingLeft: "0" }}>
            <Task {...task} key={task.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
