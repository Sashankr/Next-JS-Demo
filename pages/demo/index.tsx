import { useState } from "react";
import jwt from 'jsonwebtoken'

import styles from "./styles.module.scss";

export default function Demo() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [message,setMessage] = useState<string>('You are not logged in');

  const { username, password } = inputs;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((inputs) => {
      return { ...inputs, [name]: value };
    });
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();

    const result = await fetch('http://localhost:3000/api/hello',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        username : username,
        password : password
      })
    }).then(response =>response.json())

    const token = result.token
    console.log(token);

    if(token){
      const json = jwt.decode(token) as {[key : string] : string};
      setMessage(`Welcome ${json.username} and you are ${json.admin ? 'an admin':'not an admin'}`)
    }else{
      setMessage('Something went wrong')
    }
    
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{message}</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            onChange={handleChange}
            value={username}
            name="username"
            className={styles.input}
            type="text"
            placeholder="username"
          />
        </p>
        <p>
          <input
            onChange={handleChange}
            value={password}
            name="password"
            className={styles.input}
            type="password"
            placeholder="password"
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
