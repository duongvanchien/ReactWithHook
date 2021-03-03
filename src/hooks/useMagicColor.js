import React, { useState, useEffect, useRef } from "react";

function randomColor(colorRef) {
  const colorlist = [
    "#e53935",
    "#d500f9",
    "#6a1b9a",
    "#c2185b",
    "#4527a0",
    "#283593",
    "#1e88e5",
    "#00796b",
    "#689f38",
    "#fdd835",
    "#e65100",
    "#616161",
    "#4e342e",
    "#455a64",
  ];

  let currentIndex = colorlist.indexOf(colorRef);
  let index = currentIndex;

  while (index === currentIndex) {
    index = Math.trunc(Math.random() * colorlist.length);
  }

  console.log(colorlist[index]);

  return colorlist[index];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const changeColorInterval = setInterval(() => {
      console.log("before Color", colorRef.current);
      const currentColor = randomColor(colorRef.current);
      setColor(currentColor);

      colorRef.current = currentColor;
    }, 1000);
    return () => {
      clearInterval(changeColorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
