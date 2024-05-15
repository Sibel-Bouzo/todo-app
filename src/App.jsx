import { LoadingPage } from "./pages/Loading/LoadingPage";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/ui/HomePage";
import { NewTask } from "./pages/Home/ui/Components/NewTask/NewTask";
import { Premium } from "./pages/Home/ui/Components/Premium/Premium";
import { Toaster } from "react-hot-toast";
import { Notifications } from "./pages/Home/ui/Components/Notifications/Notifications";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./contexts/context";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { darkMode } = useGlobalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 30);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? "flex dark" : "flex"}>
      <Toaster position="top-center" reverseOrder={false} />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route index path="/todo-app" element={<HomePage />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
