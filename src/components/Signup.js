import {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <>
      <form 
        className='form'
        onSubmit={(e) => {
          e.preventDefault();

          axios.post(
            "https://mini-full-todo-backend.vercel.app/signup", {

              name,
              email,
              password
            }
          ).then((response) => {
            console.log(response)
          })

          setName("");
          setEmail("");
          setPassword("")
          navigate("/");
        }}
      >
        <label className='label'>
          Name:
          <input type="text" className="input" onChange={(e) => setName(e.target.value)} value={name}/>
        </label>
        <label className='label'>
          Email:
          <input type="email" className="input" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        <label className='label'>
          Password:
          <input type="password" className="input"onChange={(e) => setPassword(e.target.value)} value={password}/>
        </label>
        <input type="submit" className="submit" value="Signup!"/>
      </form>
    </>
  )
}

export default Signup;