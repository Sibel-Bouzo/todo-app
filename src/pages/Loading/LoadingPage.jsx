import "./LoadingPage.css";

export const LoadingPage = () => {
  return (
    <div className="container w-full">
      <div className="loading absolute top-[40%] translate-y-[-50%] left-[47%] translate-x-[-50%]">
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
        <h2 className="dark:text-popover">Todoo</h2>
        <div className="loading-progress">
          <div className="loading-bar dark:bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};
