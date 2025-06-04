const HabitListItem = ({ item, onDelete, onIncrement, onDecrement }) => {
  return (
    <div
      className={`flex items-center gap-2 m-2 p-2 rounded ${
        item.completed ? "bg-green-700" : "bg-slate-600"
      }`}
    >
      <span className="flex-1">{item.content}</span>
      <button
        onClick={() => onDecrement(item.id)}
        className="bg-gray-400 px-2 rounded text-black"
        disabled={item.status === 0}
        aria-label="Decrement"
      >
        -
      </button>
      <span className="w-16 text-center">
        {item.status} / {item.goals}
      </span>
      <button
        onClick={() => onIncrement(item.id)}
        className="bg-gray-400 px-2 rounded text-black"
        disabled={item.status === item.goals}
        aria-label="Increment"
      >
        +
      </button>
      {item.completed && <span className="text-green-300 ml-2">✅</span>}
      <button
        onClick={() => onDelete(item.id)}
        className="bg-red-500 px-2 rounded"
        aria-label="Delete"
      >
        Delete
      </button>
    </div>
  );
};

export default HabitListItem;
