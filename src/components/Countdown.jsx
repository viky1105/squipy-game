import {
  useState,
  useEffect
} from "react";

export default function Countdown({
  onComplete
}) {
  const [count, setCount] =
    useState(3);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () =>
      clearTimeout(timer);
  }, [count]);

  return (
    <div className="text-center">

      <h1 className="text-8xl font-bold">
        {count}
      </h1>

    </div>
  );
}