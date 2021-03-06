import React, { useState, useEffect } from "react";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function Clock() {
  const { date } = useClock();

  return (
    <div className="better-clock">
      <p className="better-clock__time">{date}</p>
    </div>
  );
}

export default Clock;
