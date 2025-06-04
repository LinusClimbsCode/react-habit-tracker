import React from 'react';

const ProgressActions = ({ items, setItems }) => {
  const deleteAll = () => {
    setItems([]);
  };

  const completeAllGoals = () => {
    setItems(
      items.map((item) => ({
        ...item,
        status: Number(item.goals),
        completed: true,
      }))
    );
  };

  const resetAllGoals = () => {
    setItems(
      items.map((item) => ({
        ...item,
        status: 0,
        completed: false,
      }))
    );
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <button
        className="flex items-center justify-center bg-indigo-200 rounded p-2 m-2 min-w-10 min-h-10"
        onClick={completeAllGoals}
      >
        Complete all Goals
      </button>
      <button
        className="flex items-center justify-center bg-purple-500 rounded p-2 m-2 min-w-10 min-h-10"
        onClick={resetAllGoals}
      >
        Reset All Goals
      </button>
      <button
        className="flex items-center justify-center bg-pink-500 rounded p-2 m-2 min-w-10 min-h-10"
        onClick={deleteAll}
      >
        Delete All
      </button>
    </div>
  );
};

export default ProgressActions;
