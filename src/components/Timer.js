import { useState, useEffect, useRef } from 'react';

export function Timer({ sec, callBack, uniqueResetData }) {
  const [seconds, setSeconds] = useState(sec);
  const uniqueResetDataRef = useRef(uniqueResetData);

  useEffect(() => {
    if (uniqueResetData !== uniqueResetDataRef) {
      uniqueResetDataRef.current = uniqueResetData;
      setSeconds(sec);
    }
  }, [uniqueResetData, sec]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setSeconds((prev) => prev - 1 );
    }, 1000);
    return () => clearInterval(timeout);
  }, [sec]);

  useEffect(() => {
    if (seconds === 0) {
      callBack();
    }
  }, [seconds, callBack]);

  return (
    <h3>
      {seconds}
    </h3>
  );
};
