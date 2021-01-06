import React, { useState} from 'react'

import { useHistory } from "react-router";
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import AuthService from "../services/auth.service";
import "./css/Login.css"
import   svg  from "./images/loginhome.svg"






    
const Login = (props) => {
  const [emailvalue,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [message,setMessage]=useState("hello");
   const [loading,setLoading]=useState(false);
   let history=useHistory()
   // handle login submit
   const handleLogin=(e)=>{
    e.preventDefault();
    setLoading(true);
    
   console.log("okey")
   AuthService.login(emailvalue,password).then( ()=>{
    history.push("/home")
    window.location.reload();
   }) 
  }


   console.log("loading",loading);
   console.log("password",password);
   console.log("username",emailvalue);
   console.log("message",message);

   const required = value => {
    if (!value) {
      return (
        <div className="alert" role="alert"> ce champ est obligatoire
         </div>);
    }
  };
  const email = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert" role="alert">
          entrer un email
        </div>
      );
    }
  };
  return (
    <div  className="login" >
      <header> 
        <div className="left__header">
          ENSAKFORUM
        </div>
        <div className="right__header">
          <ul>
            <li> <a href="#">S'inscrire</a>  </li>
            <li  className="login__buton" > <a href="#">Se connecter</a>  </li>
          </ul>
        </div>
      </header>
      
      <div  className="login__body" >
        <div className="login__container">
        <img src={svg} alt="svg"/>

      <Form  className="login__form" onSubmit={ e=>handleLogin(e)}>
      <h1 className="title" >  Connexion </h1>
     
      <Input className="input"  placeholder="Email" type="text" name="email" value={emailvalue} onChange={e=>setEmail(e.target.value)} validations={[required,email]} />
      <Input  className="password" placeholder="mot de passe" type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} validations={[required]}  />
     <br/>
     <CheckButton  className="button" > Se connecter</CheckButton>
    </Form>

      </div>
      </div>
      
    </div>
  )
}

export default Login
