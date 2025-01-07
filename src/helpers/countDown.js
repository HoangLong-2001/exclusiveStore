const countDown = () => {
  const goal = new Date("2024-12-12").getTime();
  const days = Math.floor((goal - Date.now()) / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    ((goal - Date.now()) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor(
    ((goal - Date.now()) % (60 * 60 * 1000)) / (60 * 1000)
  );
  const seconds = Math.floor(((goal - Date.now()) % (60 * 1000)) / 1000);

  return { days: days, hours: hours, minutes: minutes, seconds: seconds };
};
export default countDown;
