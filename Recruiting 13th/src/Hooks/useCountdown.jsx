import { useState, useEffect, useRef } from "react";

// useCountdown.js
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const timerRef = useRef(null); // 타이머를 useRef로 관리
  const timeLeftRef = useRef(timeLeft); // timeLeft를 useRef로 관리 (상태 변경 없이 참조만 함)

  function calculateTimeLeft(target) {
    const now = new Date();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    // 타이머가 시작되면 1초마다 업데이트
    timerRef.current = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      timeLeftRef.current = newTimeLeft; // ref로 직접 상태를 업데이트
      setTimeLeft(newTimeLeft); // 상태를 변경하여 타이머만 리렌더링
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearInterval(timerRef.current);
    };
  }, [targetDate]);

  return timeLeft;
};

export default useCountdown;
