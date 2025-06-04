import { useState } from 'react';

const HabitFormItem = ({ item, onDelete}) => {
  const [counter, setCounter] = useState(0);

  const handleClick = (operator) => {
    if (operator === '+') {
      setCounter((prev) => prev + 1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center justify-between bg-slate-500 rounded p-2 m-4">
      <p>{item.content}</p>
      <div className="flex items-center justify-center">
        <button
          className="flex items-center justify-center bg-green-500 rounded p-2 m-2 min-w-10 min-h-10"
          onClick={() => handleClick('+')}
          disabled={(counter == item.goals) ? true : false}
        >
          +
        </button>
        <button
          className="flex items-center justify-center bg-slate-800 rounded p-2 m-2 min-w-10 min-h-10"
          onClick={() => handleClick('-')}
          disabled={(counter == 0) ? true : false}
        >
          -
        </button>
        <p className="flex">
          progress: {counter}/{item.goals}
        </p>
        <button
            className="flex items-center justify-center bg-red-500 rounded p-2 m-2 min-w-10 min-h-10 text-white"
            onClick={() => onDelete(item.id)}
        >
            Delete
        </button>
      </div>
    </div>
  );
};

export default HabitFormItem;