import './styles/app.css'
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { useState } from 'react';


function App() {
  const [todo, setTodo] = useState([])
  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString().substring(2, 9),
        task : userInput,
        complete: false
      }
      setTodo([...todo, newItem])
    }
  }
  const removeTask = (id) => {
    setTodo([...todo.filter((todo) => todo.id !== id)])
  }

  const DoneTask = (id) => {
    setTodo([
      ...todo.map((todo) => 
        todo.id === id ? {...todo, complete: !todo.complete}:{...todo}
      )
    ])
  }

  return (
    <div className="App">
     <header>
       <h1>
         Todo List {todo.length}
       </h1>
     </header>
     <TodoForm addTask={addTask}/>
     {todo.map((todo) => {
       return (
         <Todo
         todo={todo}
         toggle={DoneTask}
         removeTask={removeTask}
         key={todo.id}
         />
       )
     })}
    </div>
  );
}

export default App;
