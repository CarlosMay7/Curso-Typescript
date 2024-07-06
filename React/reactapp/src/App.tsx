import React, {useState} from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { ToDO } from './models/ToDo';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
  const [todos, setToDos] = useState<ToDO[]>([]);

  const addToDo = (text: string) => {
    setToDos((prevToDos => [...prevToDos, {id: Math.random().toString(), text: text}]));
  }

  const toDoDelete = (id: string) => {
    setToDos(
      prevToDos => prevToDos.filter(toDo => toDo.id !== id)
    )
  }

  return (
    <div className="App">
      <NewToDo onAddToDo = {addToDo}/>
      <ToDoList items = {todos} onDelete={toDoDelete} />
    </div>
  )
}

export default App;
