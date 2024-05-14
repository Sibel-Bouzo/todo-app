/* eslint-disable react/prop-types */
export const Notification = ({ notification }) => {
  return (
    <div className="flex justify-between align-middle md:flex-row flex-col">
      <p>{notification?.message}</p>
      <p className="text-gray-400 text-sm mt-2 md:mt-0">{notification?.date}</p>
    </div>
  );
};
