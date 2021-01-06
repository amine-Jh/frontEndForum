import React from 'react'
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import "./css/Login.css"

const SignupStudent = () => {
  return (
    <div>
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
    </div>
  )
}

export default SignupStudent
