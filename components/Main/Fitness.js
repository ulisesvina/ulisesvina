import { useEffect, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { RiFootprintLine } from "react-icons/ri";

const Fitness = () => {
  const [fitnessData, setFitnessData] = useState({ calories: 0, steps: 0 });

  useEffect(() => {
    fetch("/api/fitness-data").then(res => res.json()).then(data => setFitnessData(data));
  }, []);

  return (
    <div className="flex flex-col p-6 rounded-xl w-full secondary-bg secondary-text items-center justify-center">
      <h1 className="text-2xl">🏋️ Fitness</h1>
      <p>
        <AiOutlineFire className="inline"/> Calories burned: {fitnessData.calories.toFixed(2)}<br/>
        <RiFootprintLine className="inline"/> Walked: {fitnessData.steps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} steps (~{(fitnessData.steps * 0.0008).toFixed(1)} km)
      </p>
    </div>
  );
};

export default Fitness;
