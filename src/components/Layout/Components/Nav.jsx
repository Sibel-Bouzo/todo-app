import { Link, useLocation } from "react-router-dom";
import { navlinks } from "../../../data/data";
import { Header } from "./Header";
import "boxicons";
import { useGlobalContext } from "@/contexts/context";

export const Nav = () => {
  const location = useLocation().pathname;
  const { darkMode, toggleDarkMode } = useGlobalContext();

  return (
    <aside
      className="relative top-0 left-0 px-3 py-5 bg-card text-foreground nav-left dark:shadow-none dark:border-r
     dark:border-white dark:border-solid"
    >
      <div className="fixed top-0 left-0 px-2 py-5 sm:px-2 bg-card text-foreground lg:pl-5 min-h-[100vh]">
        <Header />
        <ul className="mt-2 h-full">
          {navlinks.map((link, index) => {
            return (
              <li
                key={index}
                className={link.href === location ? "active" : ""}
              >
                <Link to={link.href} className="flex items-center">
                  <box-icon
                    name={link.icon}
                    type={link.type}
                    className="align-middle"
                    size="sm"
                    color="currentColor"
                  ></box-icon>
                  <span className="mt-[0.3rem]">{link.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="flex items-start" onClick={toggleDarkMode}>
            {!darkMode ? (
              <box-icon
                type="solid"
                name="moon"
                color="currentColor"
              ></box-icon>
            ) : (
              <box-icon
                name="sun"
                type="solid"
                className="align-middle"
                color="currentColor"
              ></box-icon>
            )}
            <span className="mt-[0.1rem]">Change Mode</span>
          </li>
          <li className="p-2 hover:text-popover flex items-start absolute bottom-0 text-popover">
            <box-icon
              color="currentColor"
              name="log-out"
              rotate="180"
              size="sm"
            ></box-icon>
            <span className="ml-2 font-bold mt-[0.1rem]">Log Out</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
