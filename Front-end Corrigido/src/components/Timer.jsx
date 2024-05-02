import React, { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';

const Timer = () => {
  const [seconds, setSeconds] = useState(30);
  const [rotateSeconds, setRotateSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
      setRotateSeconds(prevRotate => (prevRotate + 6) % 360); 
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(timer);
    }
  }, [seconds]);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center">
      <div className="flex items-center space-x-2 p-2 rounded-lg shadow-md">
        <FiClock className="text-xl" style={{ transform: `rotate(${rotateSeconds}deg)` }}/>
        <span>Tempo restante: {seconds} segundos</span>
      </div>
    </div>
  );
};

export default Timer;
