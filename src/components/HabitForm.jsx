import { useState } from 'react';

const HabitForm = ({ onAdd }) => {
  const [name, setName] = useState('');
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
    setName('');
    setGoals(1);
  };

  return (
    <form
      className="m-8 p-2 flex items-center justify-center gap-2 border border-dashed rounded group relative"
      onSubmit={handleSubmit}
    >
      <input
        className="rounded bg-slate-600 text-white w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        type="text"
        placeholder="New habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="rounded bg-slate-600 text-white min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        type="number"
        min="1"
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
        required
      />
      <button
        className="bg-indigo-200 rounded text-white min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        type="submit"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
