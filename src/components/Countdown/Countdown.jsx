import React, { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(new Date().getTime());
  const [time, setTime] = useState("");
  useEffect(() => {

    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s");
      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN EXPIRED");
      }
    }, 1000);
    return () => clearInterval(x);
  }, [countdownDate]);

  const handleDateChange = (e) => {
    const newCountdownDate = new Date(e.target.value).getTime();
    setCountdownDate(newCountdownDate);
  };
  return (
    <div className="countdown">
      <h2>CUENTA ATRÁS</h2>
      <input type="date" onChange={handleDateChange} />
      <h1> {time}</h1>
    </div>
  );
};

export default Countdown;
