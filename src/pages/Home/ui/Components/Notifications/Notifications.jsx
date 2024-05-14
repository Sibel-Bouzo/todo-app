import { Nav } from "@/components/Layout/Components/Nav";
import { useGlobalContext } from "../../../../../contexts/context";
import { Notification } from "./component/Notification";
import toast from "react-hot-toast";
import "boxicons";

export const Notifications = () => {
  const { notifications, clearNotifications } = useGlobalContext();

  return (
    <>
      <Nav />
      <main className="container text-foreground">
        <div className="flex flex-row justify-between align-middle font-bold w-full dark:text-popover">
          <h2>Notifications</h2>
          <button
            className="font-normal"
            onClick={() => {
              clearNotifications(),
                notifications.length > 0 &&
                  toast("Notifications Cleared", {
                    icon: (
                      <box-icon name="x" color="var(--destructive)"></box-icon>
                    ),
                  });
            }}
          >
            Clear All
          </button>
        </div>
        <div className="mt-5 bg-card rounded p-4 dark:border dark:border-white dark:border-solid dark:shadow-none">
          {notifications.length < 1 ? (
            <div>No Notifications</div>
          ) : (
            <ul>
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  className="[&:not(:last-child)]:border-b border-gray-100 mb-2 py-2"
                >
                  <Notification notification={notification} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};
