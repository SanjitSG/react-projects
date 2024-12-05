import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type Props = {
  duration: number; // Duration in seconds
};

const DisplayClock: React.FC<Props> = ({ duration }) => {
  const [countDown, setCountdown] = useState(duration);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (countDown <= 0 || paused) return;

    const intervalId = setInterval(() => {
      setCountdown((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDown, paused]);

  const formatTimeParts = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return { minutes, seconds: secs };
  };

  const { minutes, seconds } = formatTimeParts(countDown);

  function togglePause() {
    setPaused((prevPaused) => !prevPaused);
  }

  return (
    <div className=" flex justify-center space-y-4 flex-col">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className="shadow-xl h-96 w-96 rounded-full border-4 border-green-400 text-white font-bold text-5xl grid place-content-center hover:cursor-pointer" onClick={togglePause}>
        <NumberFlowGroup>
          <div
            style={{
              fontVariantNumeric: "tabular-nums",
              "--number-flow-char-height": "0.85em",
            }}
            className="flex items-baseline space-x-2"
          >
            <NumberFlow
              value={minutes}
              trend={-1}
              format={{ minimumIntegerDigits: 2 }}
            />
            <span>:</span>
            <NumberFlow
              value={seconds}
              trend={-1}
              format={{ minimumIntegerDigits: 2 }}
            />
          </div>
        </NumberFlowGroup>
      </div>

    </div>
  );
};

export default DisplayClock;
