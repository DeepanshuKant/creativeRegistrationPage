import './App.css';
import { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

function App() {

  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function clearInput() {
    setUserName("")
    setEmail("")
    setPassword("")
  }

  async function post() {

    const userDetails = {
      "username": username,
      "email": email,
      "password": password
    }

    await axios.post("/user-register", userDetails).then((data) => {
      Swal.fire({
        title: `<strong>${data.data.message}</strong>`,
        icon: 'success',
        showCloseButton: true
      })

      clearInput();
    }).catch((err) => Swal.fire({
      title: `<strong>${err.message}</strong>`,
      icon: 'error',
      showCloseButton: true
    }));

  }


  return (
    <>
      <div>
        <div className="main__Back">
          <div className="main__inputs">
            <input type="text" placeholder="Enter Username" className="inputs" value={username} onChange={(e) => setUserName(e.target.value)} />
            <input type="email" placeholder="Enter Email" className="inputs" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" className="inputs" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn" onClick={post}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default App;
