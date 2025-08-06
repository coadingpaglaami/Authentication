"use client";
import { Counter } from "./Counter";
import { Stats } from "./Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/features/counters/counterSlice";


export const Main = () => {
  const counters = useSelector((state) => state.counters);
  console.log(counters);
  const dispach = useDispatch();
  const totalCount = counters.reduce((sum, current) => {
    if (sum + current.value >= 0) return sum + current.value;
    return sum;
  }, 0);
  const handleIncrement = (counterId) => {
    console.log("working")
    dispach(increment(counterId)); // access the feature which is connected 
  };
  const handleDecrement = (counterId) => {
    dispach(decrement(counterId));
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
