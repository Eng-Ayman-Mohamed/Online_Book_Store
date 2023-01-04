import React from 'react';
import './Signin.css';
import { Link, useNavigate } from "react-router-dom";
import {environment} from '../Environment';
export const ValidateEmail = (mail = "") => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail));

function Signin() {
  const [Error, setError] = React.useState(false);
  let [info, setInfo] = React.useState({ email: "", password: ""});
  const [User, setuser] = React.useState("customer");
  let nav = useNavigate();
  let handleChange = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!ValidateEmail(info.email)) {
      setError(() => { return true; })
      return;
    }
    let route = User==="customer"? "in": "inManager";
    console.log(route);
    let result = await fetch(`${environment.Host}/sign/${route}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    let message = await result.json();
    if (message.state === "accepted") {
      let UserState = { type: message.type, id: message.id };
      //then route based on type of user
      if(UserState.type === "customer"){
        nav("/customer", { state: UserState });
      }else{
        nav("/manager", { state: UserState });
      }
    } else {
      setError(() => { return true; })
    }
  }
  return (
    <div className='sign-in'>
      <div className='form-container'>
        <h1 className='sign-in-header'>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <input type="mail" placeholder="E-Mail" name="email" required value={info.email} onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" required value={info.password} onChange={handleChange} />
          <div className='check-boxs'>
            <div >
              <input className="checkbox" type="checkbox" checked={User === "customer"} onChange={() => setuser("customer")} /> Customer</div>
            <div>
              <input className="checkbox" type="checkbox" checked={User === "manager"} onChange={() => setuser("manager")} /> Manager</div>
          </div>
          <input className='btn-submit' title='button' type="submit" value="Sign In" name="Sign In" />
          <div className='signup'>
            <p>You don't have Acount?</p>
            <Link to="/signUp"> Sign up </Link>
          </div>
        </form>
      </div>
      {Error && <div className='ErrorPOP'>
        <div className='PopUP'>
          <p>Email or Password are not correct !!</p>
          <button onClick={() => { setError(() => { return false; }) }}>OK</button>
        </div>
      </div>}
    </div>
  )
}

export default Signin;