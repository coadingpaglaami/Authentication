"use client";
import { useState } from "react";
import { Counter } from "./Counter";
import { Stats } from "./Stats";

const initialCounter = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
export const Main = () => {
  const [counters, setCounter] = useState(initialCounter);
  const totalCount = counters.reduce((sum, current) => {
    if (sum+current.value >= 0) return sum + current.value;
    return sum;
  }, 0);
  const handleIncrement = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId && counter.value>=0) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounter(updatedCounter);
  };
  const handleDecrement = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId && counter.value>0) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounter(updatedCounter);
  };
  return (
    <div className="h-screen w-screen p-10 bg-gray-100 text-slate-700">
      <h3 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h3>
      <div className="max-w-md mx-auto text-center mt-10 space-y-5">
        {counters.map((counder) => (
          <Counter
            count={counder.value}
            key={counder.id}
            onIncrement={() => handleIncrement(counder.id)}
            onDecrement={() => handleDecrement(counder.id)}
          />
        ))}
        <Stats totalCount={totalCount} />
      </div>
    </div>
  );
};
