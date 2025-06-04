import { useState } from 'react';
import HabitListItem from './HabitListItem';

const HabitList = ({ items, setItems, onDelete }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputGoal, setInputGoal] = useState('');

  const handleClick = () => {
    if (inputValue.trim() === '' || inputGoal.trim() === '') return;
    const newHabit = {
      id: Date.now(),
      content: inputValue,
      goals: inputGoal,
    };
    setItems([...items, newHabit]);
    setInputValue('');
    setInputGoal('');
  };

  return (
    <div>
      {items.map((item) => (
        <HabitListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
      <div className="flex items-center justify-between bg-slate-500 rounded p-2 m-4">
        <input
          name="content"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-1 block w-96 border border-natural-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
        />
        <input
          name="goal"
          value={inputGoal}
          onChange={(e) => setInputGoal(e.target.value)}
          className="mt-1 block w-auto border border-natural-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
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
    </div>
  );
};

export default HabitList;
