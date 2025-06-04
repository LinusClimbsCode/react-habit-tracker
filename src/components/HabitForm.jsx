import { useState } from "react";

const HabitForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [goals, setGoals] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || goals < 1) return;

    const newHabit = {
      id: Date.now(),
      name: name.trim(),
      goals: Number(goals),
      status: 0,
      completed: false,
    };

    onAdd(newHabit);
    setName("");
    setGoals(1);
  };

  return (
    <form
      className="flex items-center justify-center gap-4 border border-dashed rounded m-8 p-4 group relative"
      onSubmit={handleSubmit}
    >
      <input
        className="p-2 rounded bg-slate-600 text-white w-9/12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        type="text"
        placeholder="New habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="p-2 rounded bg-slate-600 text-white w-24 w-2/12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        type="number"
        min="1"
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
        required
      />
      <button
        className="px-4 py-2 bg-green-500 rounded text-white min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        type="submit"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
