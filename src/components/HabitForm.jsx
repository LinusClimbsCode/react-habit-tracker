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
      className="m-8 p-2 h-16 flex items-center justify-center gap-2 border border-dashed rounded group relative"
      onSubmit={handleSubmit}
    >
      <div className='p-2 absolute inset-0 z-10 flex items-center justify-center w-full gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <input
          className="px-2 py-1 rounded bg-slate-600 text-white w-full"
          type="text"
          placeholder="New habit"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="px-2 py-1 rounded bg-slate-600 text-white min-w-max"
          type="number"
          min="1"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          required
        />
        <button
          className="px-2 py-1 bg-indigo-200 rounded text-white min-w-max"
          type="submit"
        >
          Add Habit
        </button>
      </div>
    <p className="absolute inset-0 z-0 flex items-center justify-center text-white opacity-60 group-hover:opacity-0 transition-opacity duration-300">
      ADD NEW HABIT
    </p>
    </form>
  );
};

export default HabitForm;
