import { useState } from "react";

const HabitForm = ({ items, setItems }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputGoal, setInputGoal] = useState(1);

  const handleClick = () => {
    if (inputValue.trim() === '' || !inputGoal) return;
    const newHabit = {
      id: Date.now(),
      content: inputValue,
      status: 0,
      goals: Number(inputGoal),
      completed: false
    };
    setItems([...items, newHabit]);
    setInputValue('');
    setInputGoal(1);
  };

  return (
    <div className="flex items-center justify-between border border-neutral-100 rounded border-dashed p-2 m-4">
      <input
        name="content"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mt-1 block w-full border border-neutral-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
        placeholder="New habit"
      />
      <input
        type="number"
        name="goal"
        value={inputGoal}
        min={1}
        onChange={(e) => setInputGoal(Number(e.target.value))}
        className="mt-1 block w-2/12 border border-neutral-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
      />
      <div className="flex items-center justify-center">
        <button
          className="flex items-center justify-center bg-green-500 rounded p-2 m-2 min-w-10 min-h-10"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default HabitForm;
