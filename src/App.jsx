import { useState } from 'react';
import Header from './components/Header'
import HabitList from './components/HabitList'

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      content: 'Learn programming',
      goals: 3,
    },
  ]);

  const onDelete = (itemID) => {
    setItems(items.filter(item => item.id !== itemID));
  }

  return (
    <div className='bg-slate-800 text-neutral-100'>
    <Header />
    <HabitList items={items} setItems={setItems} onDelete={onDelete} />
    </div>
  )
}

export default App
