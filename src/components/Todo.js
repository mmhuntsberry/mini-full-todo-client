import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo';

const Todo = ({token, setUser, user}) => {
   const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://mini-full-todo-backend-1.vercel.app/todos", {
    // axios.get("http://localhost:5000/todos", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
    setUser(response.data.user)
    setTodos(response.data.rows)})
  }, [token, setUser])

  return (
    <div className='todo-container'> 
    <CreateTodo token={token} user={user} setTodos={setTodos} todos={todos}/>
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