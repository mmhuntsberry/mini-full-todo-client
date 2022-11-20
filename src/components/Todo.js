import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo';

const Todo = (props) => {
   const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://mini-full-todo-backend-1.vercel.app/todos", {
    // axios.get("http://localhost:5000/todos", {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    }).then((response) => {
    props.setUser(response.data.user)
    setTodos(response.data.rows)})
  }, [props.token])

  return (
    <div className='todo-container'> 
    <CreateTodo token={props.token} user={props.user} setTodos={setTodos} todos={todos}/>
      <ul className='list'>
        {!todos.length ? (
          <p>Loading todos...</p>
        ) : (
          todos.map(({id, todo, user_id}) => (
            <li className='item' key={id}>{todo}</li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Todo