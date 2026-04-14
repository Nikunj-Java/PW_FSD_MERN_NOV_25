import { useEffect, useState } from "react";
function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval); // cleanup
    };
  }, []);
  return <h1>Time: {time}</h1>;
}

export default Timer;