import HabitListItem from './HabitListItem';

const HabitList = ({ items, onDelete, onIncrement, onDecrement }) => (
  <div>
    {items.map(item => (
      <HabitListItem
        key={item.id}
        item={item}
        onDelete={onDelete}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    ))}
  </div>
);

export default HabitList;
