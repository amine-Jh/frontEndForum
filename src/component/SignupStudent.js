import React from 'react'
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import Select   from 'react-validation/build/select';

import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import "./css/Login.css";
import "./css/SignUp.css";

const SignupStudent = () => {

    const required = value => {
        if (!value) {
          return (
            <div className="alert" role="alert"> ce champ est obligatoire
             </div>);
        }
      };

      const vusername = value => {
        if (value.length < 3 || value.length > 20) {
          return (
            <div className="alert alert-danger" role="alert">
              The username must be between 3 and 20 characters.
            </div>
          );
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
    <div  className="signup" >
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
      <div className="signup__body">
          <h1>Créer  <span>votre compte et faciliter votre accees au 
            </span> forum   </h1>
          <div className="signup__container">
              
            <Form    className="register__form" >  
            
                <div className="left__form" >
                    <Input validations={[required]} type="text" name="name" placeholder="Nom"  />
                    <Input validations={[required]} type="phone" name="telephone" placeholder="telephone"  />
                    <Input validations={[required]}  type="email" name="email" placeholder="email"  validations={[email]}  />
                    <Input validations={[required]} type="text" name="password" placeholder="mot de passe"  />
                </div>
                <div className="right__form" >
                
                    <Input type="tel" name="telephone" placeholder="telephone"  />
                    <Select name='annee' value='' validations={[required]}>
    <option value=''>entrer l'annee</option>
    <option value='1'>3eme année</option>
    <option value='2'>4éme année</option>
    <option value='3'>5éme année</option>
</Select>
    <Select   name='filliere'  validations={[required]}  >
    <option value=''>entrer votre filliere</option>
    <option value='GI'>G.info</option>
    <option value='GIND'>G.indus</option>
    <option value='GE'>G.Elec</option>
    <option value='GM'>G.Mecatronique</option>
</Select>
                    <CheckButton> S'inscrire </CheckButton>
                </div>
                </Form>


          </div>
      </div>
    </div>
  )
}

export default SignupStudent
