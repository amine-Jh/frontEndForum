import React, { useState } from 'react'
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import Select   from 'react-validation/build/select';
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import "./css/Login.css";
import "./css/SignUp.css"
import AuthService from '../services/auth.service';
import { useHistory } from 'react-router-dom';
import uploadService from '../services/upload-service';



const SignupStudent = () => {
let forml;
let btn;
  const [name,setName]=useState("");
  const [message,setMessage]=useState("");
  const [photo,setPhoto]=useState(null)
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const [telephone,setTelephone]=useState("");
  const [filliere,setFilliere]=useState("");
  const [annee,setAnnee]=useState("");
  const [emailv,setEmail]=useState("");
 
  let history=new useHistory();

  const handleLogin=(e)=>{
    e.preventDefault();
    forml.validateAll();
    if (btn.context._errors.length === 0) {
      AuthService.signupStuent(name,password,telephone,emailv,annee,filliere,username,photo)
    .then(   response=>{  
      setMessage(response) 
            if( response.message.startsWith("Welcome") ){
              history.push("/login");
              window.location.reload();
            }})
    }
  }


 function handlePhoto(e){
  let file =e.target.files[0]
  console.log("file",file)
  uploadService.upload(file).then(
    e=> {
        setPhoto(e.data)
  }
  )}

  const vpassword = value => {
    if (value.length < 6 || value.length > 40) 
      return(<span className="alert" > The password must be between 6 and 40 characters.</span>);
    };
const required = value => {
        if (!value) 
        return (<div className="alert" > ce champ est obligatoire . </div>);
  };
const vusername = value => {
        if (value.length < 3 || value.length > 20) {
           return( <div className="alert" >The username must be between 3 and 20 characters. </div>  )
        }
      };

      const email = (value) => {
        if (!isEmail(value)) 
            return (<div className="alert" >  entrer un email  valide</div>);
            
           };

  return (
    <div  className="signup" >
      
      <div className="signup__body">
          <h1>Créer  <span>votre compte et faciliter votre accees au 
            </span> forum   </h1>
            <h2> Pour les étudiants  </h2>
          <div className="signup__container">
              
            <Form  ref={  e=>forml=e } onSubmit={e=>handleLogin(e)} className="register__form" >  
            
                <div className="left__form" >
                    <Input validations={[required]} type="text" name="name" placeholder="Nom"    onChange={e=>setName(e.target.value)}  />
                    <Input validations={[required]} type="tel" name="telephone" placeholder="telephone"    onChange={e=>setTelephone(e.target.value)} />
                    <Input validations={[required,email]}  type="email" name="email" placeholder="email"     onChange={e=>{ setEmail(e.target.value) } }  />
                    <Input validations={[required,vpassword]} type="password" name="password"   placeholder="mot de passe" onChange={e=>setPassword(e.target.value)}  />
                </div>
                <div className="right__form" >
                
                    <Input type="text" name="username"  onChange={e=>setUsername(e.target.value)}  validations={[required,vusername]}  placeholder="username"  />
                    <Select name='annee'  onChange={e=>setAnnee(e.target.value)  }  validations={[required]}>
    <option value=''>entrer l'annee</option>
    <option value='3eme'>3eme année</option>
    <option value='4eme'>4éme année</option>
    <option value='5eme'>5éme année</option>
</Select>
    <Select   name='filliere' onChange={e=>setFilliere(e.target.value)} validations={[required]}  >
    <option value=''>entrer votre filliere</option>
    <option value='GI'>G.info</option>
    <option value='GIND'>G.indus</option>
    <option value='GE'>G.Elec</option>
    <option value='GM'>G.Mecatronique</option>
    <option value='RST'>G.RST</option>
</Select>


<Input type="file" name="file" onChange={(e)=>handlePhoto(e)}   placeholder="file"  />

                    <CheckButton className="button" ref={c => {btn = c;}} 
                    
                    
                    > S'inscrire </CheckButton>
                </div>
                </Form>
<h2  className="message"> {message.message } </h2>

        
          </div>
      </div>
    </div>
  )
}

export default SignupStudent
