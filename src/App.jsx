import { useState } from 'react';
import Header from './components/Header';
import HabitList from './components/HabitList';
import ProgressActions from './components/ProgressActions';
import HabitForm from './components/HabitForm';


function App() {
  const [items, setItems] = useState([]);

  const handleIncrement = (id) => {
    setItems((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              status: habit.status + 1,
              completed: habit.status + 1 === habit.goals,
            }
          : habit
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              status: habit.status - 1,
              completed: false,
            }
          : habit
      )
    );
  };

  const onDelete = (itemID) => {
    setItems(items.filter(item => item.id !== itemID));
  };

  return (
    <div className='bg-slate-800 text-neutral-100 min-h-screen'>
      <Header />
      {items.length > 0 && (
        <ProgressActions items={items} setItems={setItems} />
      )}
      <HabitList
        items={items}
        setItems={setItems}
        onDelete={onDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
          <HabitForm setItems={setItems} items={items} />
    </div>
  );
}

export default App;
