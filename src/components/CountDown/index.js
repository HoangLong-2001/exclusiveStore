import { useEffect, useState } from "react";
import countDown from "../../helpers/countDown";
export default function CountDown() {
  const [update, setUpdate] = useState({
    days: countDown().days < 0 ? 0 : countDown().days,
    hours: countDown().hours < 0 ? 0 : countDown().hours,
    minutes: countDown().minutes < 0 ? 0 : countDown().minutes,
    seconds: countDown().seconds < 0 ? 0 : countDown().seconds,
  });
  useEffect(() => {
    setInterval(() => {
      const days = countDown().days < 0 ? 0 : countDown().days;
      const hours = countDown().hours < 0 ? 0 : countDown().hours;
      const minutes = countDown().minutes < 0 ? 0 : countDown().minutes;
      const seconds = countDown().seconds < 0 ? 0 : countDown().seconds;

      setUpdate({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
  }, []);
  return (
    <div className="saleOff__timer">
      <h3>
        <span>Ngày</span> <br />
        {update.days >= 10 ? update.days : `0${update.days}`}
      </h3>
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h3>
        <span>Giờ</span> <br />
        {update.hours >= 10 ? update.hours : `0${update.hours}`}
      </h3>
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h3 className="saleOff__minutes">
        <span>Phút</span> <br />
        {update.minutes >= 10 ? update.minutes : `0${update.minutes}`}
      </h3>
      <div className="dots">
        {" "}
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h3>
        <span>Giây</span> <br />{" "}
        {update.seconds >= 10 ? update.seconds : `0${update.seconds}`}
      </h3>
    </div>
  );
}
