import React, { useState, useEffect } from "react";

function formatTime(time) {
  const hour = `0${time.getHours()}`.slice(-2);
  const minutes = `0${time.getMinutes()}`.slice(-2);
  const second = `0${time.getSeconds()}`.slice(-2);
  return hour + ":" + minutes + ":" + second;
}

function Clock() {
  const [date, setTime] = useState("");
  
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      const now_format = formatTime(now);
      setTime(now_format);
    }, 1000);

    //CLEAN UP
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      <h1>{date}</h1>
    </div>
  );
}

export default Clock;
