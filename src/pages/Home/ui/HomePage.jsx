import "./HomePage.css";

import { Tasks } from "./Components/Tasks/Tasks";
import { Nav } from "../../../components/Layout/Components/Nav";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../contexts/context";

export const HomePage = () => {
  const { tasks } = useGlobalContext();
  return (
    <>
      <Nav />
      <main className="container">
        <Link to="/todo-app/premium">
          <div className="premium-add dark:shadow-none dark:text-foreground">
            <div className="premium-title">
              <h3>Go Premium!</h3>
            </div>
            <p>get unlimited access to all our fetures</p>
          </div>
        </Link>

        <div className="tasks">
          {tasks.length < 1 ? (
            <h3 className="text-foreground mt-10">No Tasks</h3>
          ) : (
            <Tasks />
          )}
        </div>
      </main>
    </>
  );
};
