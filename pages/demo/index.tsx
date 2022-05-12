import { useState } from "react";
import styles from "./styles.module.scss";

export default function Demo() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((inputs) => {
      return { ...inputs, [name]: value };
    });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    fetch('http://localhost:3000/api/hello',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        username : username,
        password : password
      })
    }).then(response =>{
      console.log(response.text);
    })
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello</h1>
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
