import React from 'react'
import Header from './app/components/Header/Header';
import Sneakers from './app/components/Main/Sneakers/Sneakers';

function App() {
  const [sneakers, setSneakers] = React.useState([])

  const addToOrder = (item) => {
    setSneakers(prev => [item, ...prev])
  }


  const handleDelete = (id) => {
    setSneakers(prev => prev.filter(item => item.id !== id))
  }

  return (
    <>
      <Header sneakers={sneakers} handleDelete={handleDelete} />
      <Sneakers sneakers={sneakers} addToOrder={addToOrder} />
    </>
  );
}

export default App;
