import React from 'react'
import {TextField} from './TextField'
import {List} from './List'

const App = () => {
  const [state, setState] = React.useState("");
  const [todo, setTodo] = React.useState([])
  console.log(todo)

  const addText = () => {
    const arr = [...todo, {text: state}];
    setTodo(arr)
    setState("")
  }

  const deleteTodo = (index) => {
    const arr = [...todo];
    arr.splice(index, 1);
    setTodo(arr)
  }

  return (
    <div>
      <TextField state={state} setState={setState} addText={addText}/>
      <List todo={todo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App;
