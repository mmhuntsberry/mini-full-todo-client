import axios from 'axios';
import React, {useState} from 'react'

const CreateTodo = ({token, user, todos, setTodos}) => {
  const [todo, setTodo] = useState("");

  return (
    <form className='form' onSubmit={(e)=> {
      e.preventDefault();

      axios.post("https://mini-full-todo-backend-1.vercel.app/todos", {
        todo,
        user_id: user.id
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setTodo("");
      setTodos([...todos, {todo, user_id: user.id}])
    }}>
      <input type="text" className='input' onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="What do you need to do?"/>
      <input className='submit' type="submit" value="Add a todo!" />
    </form>
  )
}

export default CreateTodo