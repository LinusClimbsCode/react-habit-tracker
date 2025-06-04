import React from "react";

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
    <div className="flex items-center justify-center">
      <button
        className="flex items-center justify-center bg-red-500 rounded p-2 m-2 min-w-10 min-h-10"
        onClick={deleteAll}
      >
        Delete All
      </button>
      <button
        className="flex items-center justify-center bg-green-500 rounded p-2 m-2 min-w-10 min-h-10"
        onClick={completeAllGoals}
      >
        Complete all Goals
      </button>
      <button
        className="flex items-center justify-center bg-orange-500 rounded p-2 m-2 min-w-10 min-h-10"
        onClick={resetAllGoals}
      >
        Reset All Goals
      </button>
    </div>
  );
};

export default ProgressActions;
