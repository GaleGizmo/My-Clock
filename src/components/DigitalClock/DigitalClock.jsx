import { useEffect, useState } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  const [clockState, setClockState] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="clock">
      <h2>HORA:</h2>
      <h1>{clockState}</h1>
    </div>
  );
};

export default DigitalClock;
