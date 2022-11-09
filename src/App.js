import './App.css';
import { useState } from 'react'
import  Todo from './components/Todo';


function App() {
  const defaultState = [
    {label:"comprar mantequilla"},
    {label:"comprar pan"},
    {label:"pagarla luz"}
  ]
  const [items,setItems] = useState(defaultState)

  const list =items.map(item =>{
    return <Todo>{item.label}</Todo>
  })
  return (
    <div className="App">
      <h1>Mi lista por cosas por hacer</h1>

      <input type="text" />
      <button>agregar</button>
      {list}
      
      </div>
  );
}

export default App;


