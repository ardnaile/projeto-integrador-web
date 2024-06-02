// src/Componentes/Relogio.jsx
import React, { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';

export default function Relogio({ initialSeconds = 30, onTimeUp }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [rotateSeconds, setRotateSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setRotateSeconds((360 - ((seconds / initialSeconds) * 360)) % 360);
      } else {
        clearInterval(timer);
        if (onTimeUp) onTimeUp();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, initialSeconds, onTimeUp]);

  const getColorClass = (seconds) => {
    if (seconds <= 10) {
      return 'text-red-500';
    } else if (seconds <= 20) {
      return 'text-yellow-500';
    } else {
      return 'text-black';
    }
  };

  return (
    <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 text-black text-center ${getColorClass(seconds)}`}>
      <div className="flex items-center rounded-lg px-4 py-2">
        <FiClock className="w-24 h-24 mr-2" style={{ transform: `rotate(${rotateSeconds}deg)` }} />
        <span className="block font-bold">Tempo restante: {seconds} segundos</span>
      </div>
    </div>
  );
}
