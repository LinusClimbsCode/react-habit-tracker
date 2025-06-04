import Header from './components/Header';
import HabitList from './components/HabitList';
import ProgressActions from './components/ProgressActions';
import HabitForm from './components/HabitForm';
import { useHabits } from './components/HabitStorage';

function App() {
  const {
    habitItem,
    HandleStatusIncrement,
    HandleStatusDecrement,
    HandleDelete,
    HandleUpdate,
    HandleDeleteAll,
    HandleCompleteAllGoals,
    HandleResetAllGoals,
    setHabitItem,
  } = useHabits();

  return (
    <div className='bg-slate-800 text-neutral-100 min-h-screen'>
      <Header />
      {habitItem.length > 0 && (
        <ProgressActions
          items={habitItem}
          setItems={setHabitItem}
          onDeleteAll={HandleDeleteAll}
          onCompleteAll={HandleCompleteAllGoals}
          onResetAll={HandleResetAllGoals}
        />
      )}
      <HabitList
        items={habitItem}
        onDelete={HandleDelete}
        onIncrement={HandleStatusIncrement}
        onDecrement={HandleStatusDecrement}
      />
      <HabitForm setItems={setHabitItem} items={habitItem} onAdd={HandleUpdate} />
    </div>
  );
}

export default App;
