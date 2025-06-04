import { createContext, useContext, useState } from 'react';

const UseHabitActions = () => {
  const [habitItem, setHabitItem] = useState([]);

  const HandleStatusIncrement = (itemID) => {
    setHabitItem((prev) =>
      prev.map((habit) =>
        habit.id === itemID
          ? {
              ...habit,
              status: habit.status + 1,
              completed: habit.status + 1 === habit.goals,
            }
          : habit
      )
    );
  };

  const HandleStatusDecrement = (itemID) => {
    setHabitItem((prev) =>
      prev.map((habit) =>
        habit.id === itemID
          ? {
              ...habit,
              status: habit.status - 1,
              completed: false,
            }
          : habit
      )
    );
  };

  const HandleUpdate = (newHabit) => {
    setHabitItem((prev) => [...prev, newHabit]);
  };

  const HandleDelete = (itemID) => {
    setHabitItem((prev) => prev.filter((item) => item.id !== itemID));
  };

  const HandleDeleteAll = () => {
    setHabitItem([]);
  };

  const HandleCompleteAllGoals = () => {
    setHabitItem((prev) =>
      prev.map((item) => ({
        ...item,
        status: Number(item.goals),
        completed: true,
      }))
    );
  };

  const HandleResetAllGoals = () => {
    setHabitItem((prev) =>
      prev.map((item) => ({
        ...item,
        status: 0,
        completed: false,
      }))
    );
  };

  return {
    habitItem,
    setHabitItem,
    HandleStatusIncrement,
    HandleStatusDecrement,
    HandleUpdate,
    HandleDelete,
    HandleDeleteAll,
    HandleCompleteAllGoals,
    HandleResetAllGoals,
  };
};

// ✅ Context creation
const HabitContext = createContext(null);

// ✅ Provider component
export const HabitProvider = ({ children }) => {
  const habitActions = UseHabitActions();

  return (
    <HabitContext.Provider value={habitActions}>
      {children}
    </HabitContext.Provider>
  );
};

// ✅ Hook to access context
export const useHabits = () => useContext(HabitContext);