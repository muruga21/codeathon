import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-02-20T09:30:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center space-x-4">
      <div className="flex flex-col items-center backdrop-blur-lg bg-white/10 text-white p-4 m-2 rounded-lg">
        <span className="text-4xl font-bold">{timeLeft.days}</span>
        <span className="text-sm">Days</span>
      </div>
      <div className="flex flex-col items-center backdrop-blur-lg bg-white/10 text-white p-4 m-2 rounded-lg">
        <span className="text-4xl font-bold">{timeLeft.hours}</span>
        <span className="text-sm">Hours</span>
      </div>
      <div className="flex flex-col items-center backdrop-blur-lg bg-white/10 text-white p-4 m-2 rounded-lg">
        <span className="text-4xl font-bold">{timeLeft.minutes}</span>
        <span className="text-sm">Minutes</span>
      </div>
      <div className="flex flex-col items-center backdrop-blur-lg bg-white/10 text-white p-4 m-2 rounded-lg">
        <span className="text-4xl font-bold">{timeLeft.seconds}</span>
        <span className="text-sm">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;