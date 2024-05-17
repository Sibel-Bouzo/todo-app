import React, { useState, useContext } from "react";

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [selectedCat, setSelectedCat] = useState();
  const [date, setDate] = useState(new Date());
  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications")
      ? JSON.parse(localStorage.getItem("notifications"))
      : []
  );

  const [notificationDate, setNotificationDate] = useState(
    localStorage.getItem("notificationDate")
      ? JSON.parse(localStorage.getItem("notificationDate"))
      : ""
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode"))
      : false
  );

  const addTask = () => {
    if (taskTitle.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        details: taskDetails,
        category: selectedCat,
        completed: false,
        date: date,
      };
      setTasks([newTask, ...tasks]);

      localStorage.setItem("tasks", JSON.stringify([newTask, ...tasks]));
      setTaskTitle("");
      setTaskDetails("");
      setSelectedCat("");
      setDate(new Date());
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const deletedTask = tasks.find((task) => task.id === id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    showNotification(`${deletedTask.title} task deleted successfully.`);
  };

  const clearTasks = () => {
    setTasks([]);
    showNotification("All tasks cleared successfully.");
    localStorage.removeItem("tasks");
  };

  const showNotification = (message) => {
    const formatDate = (date) => {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );
      return formattedDate.replace(/\//g, "-");
    };
    const date = new Date();
    const formattedDate = formatDate(date);
    const notification = { message, date: formattedDate };
    const notificationDate = `${formattedDate}`;

    setNotifications([notification, ...notifications]);
    setNotificationDate(notificationDate);
    localStorage.setItem(
      "notifications",
      JSON.stringify([notification, ...notifications])
    );
    localStorage.setItem(
      "notificationDate",
      JSON.stringify([notificationDate, ...notificationDate])
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
    localStorage.removeItem("notifications");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        taskTitle,
        taskDetails,
        selectedCat,
        date,
        notifications,
        notificationDate,
        darkMode,

        setTasks,
        setTaskTitle,
        setTaskDetails,
        setSelectedCat,
        setDate,
        setNotifications,

        addTask,
        toggleTask,
        deleteTask,
        clearTasks,
        toggleDarkMode,

        clearNotifications,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
