import React, { useState} from 'react'

import { useHistory } from "react-router";
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import "./css/Login.css"
import   svg  from "./images/loginhome.svg"

const Login = (props) => {
  let forml=null;
  const [username,setUsername]=useState("");
   const [password,setPassword]=useState("");
   
   const [response,setResponse]=useState("");
   let history=useHistory()
   // handle login submit
   const handleLogin=(e)=>{
    e.preventDefault();
    // will succesfully output 
  forml.validateAll();

   AuthService.login(username,password).then(
      res=>{  
       
        if(res.message)
         setResponse(res.message)
       else{
         history.push("/home");
         window.location.reload();}
      
      
      }
   
   ).catch(  e=> { if(e){
     
          setResponse("données incorrectes")
         
   }  }  )
  }



   const required = value => {
    if (!value) {
      return (
        <div className="alert" role="alert"> ce champ est obligatoire
         </div>);
    }
  };
 
  return (
    <div  className="login" >
     
      
      <div  className="login__body" >
        <div className="login__container">
        <img src={svg} alt="svg"/>

      <Form   ref={e =>{  forml=e }  }  className="login__form" onSubmit={ e=>handleLogin(e)}>
      <h1 className="title" >  Se Connecter </h1>
     
      <Input className="input"  placeholder="Username" type="text" name="username" value={username} onChange={e=>setUsername(e.target.value)} validations={[required]} />
      <Input  className="password" placeholder="mot de passe" type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} validations={[required]}  />
     <br/>
     
     {response && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {response}
                </div>
              </div>
            )}
     <CheckButton  className="button" > Se connecter</CheckButton>
    </Form>
       
      </div>
      </div>
      
    </div>
  )
}

export default Login
