import React, { useEffect, useRef, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isResume, setIsResume] = useState(false);
  const [isStop, setIsStop] = useState(true);
  const isFirstTime = useRef(true);

  useEffect(() => {
    let x = null;
    if (isStart || isFirstTime.current) {
      setIsResume(false);
      setIsStop(false);

      x = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } 

    if (isResume) {
      setIsStart(true);
    
    } 
    if (isStop) {
      setIsStart(false);

      clearInterval(x);
    }
    isFirstTime.current = false;
    return () => clearInterval(x);
  }, [isStart, isStop, isResume]);

  return (
    <div className="stopwatch">
      <h2>CRONOMETRO</h2>
      <div className="numbers">
        <h1>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</h1>
        <h1>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</h1>
        <h1>{("0" + ((time / 10) % 100)).slice(-2)}</h1>
      </div>
      <div className="buttons">
       {isFirstTime.current||time===0 ?<button onClick={() => setIsStart(true)}>Start</button>:''}
       {!isStart&&time>0 ?<button onClick={() => setIsResume(true)}>Resume</button>:''}
       {isStart?<button onClick={() => setIsStop(true)}>Stop</button>:''} 
        {isStart||time>0?<button onClick={() => setTime(0)}>Reset</button>:''}
      </div>
    </div>
  );
};

export default Stopwatch;
