import React, { useState, useEffect } from "react";
import "./BetterClock.scss";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function Clock() {
  const { date } = useClock();

  return (
    <div>
      <h1>{date}</h1>
    </div>
  );
}

export default Clock;
