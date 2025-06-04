import HabitListItem from './HabitListItem';

function HabitList({ items, onDelete, onIncrement, onDecrement }) {
  if (!items.length) return <p className="text-center mt-8">No habits yet.</p>;

  return (
    <ul className="space-y-4 mt-8">
      {items.map((habit) => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </ul>
  );
}

export default HabitList;
