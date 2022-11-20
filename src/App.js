import {useState} from 'react';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Todo from './components/Todo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
 const [token, setToken] = useState("");
 const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin  setToken={setToken}/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/todos" element={<Todo token={token} user={user} setUser={setUser} />}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
