function HabitListItem({ habit, onDelete, onIncrement, onDecrement }) {
  return (
    <li className="flex items-center justify-between bg-slate-700 border rounded m-8 p-4">
      <div>
        <h3 className="font-bold">{habit.name}</h3>
        <p>
          Progress: {habit.status} / {habit.goals}
          {habit.completed && <span className="ml-2 text-indigo-200">✓ Completed</span>}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-2 py-1 bg-indigo-200 rounded text-white"
          onClick={() => onIncrement(habit.id)}
          disabled={habit.status >= habit.goals}
        >
          +
        </button>
        <button
          className="px-2 py-1 bg-purple-500 rounded text-white"
          onClick={() => onDecrement(habit.id)}
          disabled={habit.status <= 0}
        >
          -
        </button>
        <button
          className="px-2 py-1 bg-pink-500 rounded text-white"
          onClick={() => onDelete(habit.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default HabitListItem;
