import React ,{ useEffect, useState } from 'react'
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import Select   from 'react-validation/build/select';
import CheckButton from "react-validation/build/button";
import {isEmail ,equals } from "validator";
import "./css/Login.css";
import "./css/SignUp.css"

import { useHistory, useParams } from 'react-router-dom';
import authService from '../services/auth.service';
import userData from '../services/user-data';

const UpdateStudent = () => {
    
  let forml;
  let btn;
  const [name,setName]=useState("");
  const [message,setMessage]=useState("");
 const [password,setPassword]=useState("");
  
  const [telephone,setTelephone]=useState("");
  const [filliere,setFilliere]=useState("");
  const [annee,setAnnee]=useState("");
  const [emailv,setEmail]=useState("");
  const [error2,setError2]=useState(false);
  console.log(password)
  const [id,setId]=useState(0);
  let history=new useHistory();
  
useEffect(()=>{
    let user=authService.getCurrentUserDetails();
    
    setId(user.id)
    setAnnee(user.annee)
    setEmail(user.email)
    setName(user.name)
    setTelephone(user.telephone)
    setFilliere(user.filliere)
   
    }  
  ,[])

 

 
  const handleLogin=(e)=>{
    e.preventDefault();
    forml.validateAll();
    if (btn.context._errors.length === 0   ) {
      userData.updateStudent(id,annee,telephone,emailv,filliere,name,password)
      .then(e=>{
        if(e.data.message){
          console.log("message",e.data.message)
          setMessage(e.data.message)
          setError2(true)
        }
        else{
          localStorage.setItem("moredetails",JSON.stringify(e.data)) 
        console.log("hada makan",e.data)
        history.push("/ProfilStudent");
      
        }
        
  
  } )
      
        
  }
    
    
    
   
  
  }



 

    const required = value => {
        if (!value) 
        return (<div className="alert" > ce champ est obligatoire . </div>);
          };

    

      const email = (value) => {
        if (!isEmail(value)) 
            return (<div className="alert" >entrer un email valide</div>);
            
           };
           
  return (
    <div  className="signup" >
      
      <div className="signup__body">
          <h1>Modifier <span>votre profil
            </span> </h1>
            
          <div className="signup__container">
              
            <Form  ref={  e=>forml=e } onSubmit={e=>handleLogin(e)} className="register__form" >  
            
                <div className="left__form" >
                    <Input validations={[required]} value={name} type="text" name="name" placeholder="Nom"    onChange={e=>setName(e.target.value)}  />
                    <Input validations={[required]} value={telephone} type="tel" name="telephone" placeholder="telephone"    onChange={e=>setTelephone(e.target.value)} />
                    <Input validations={[required,email]}  value={emailv} type="email" name="email" placeholder="email"     onChange={e=>{ setEmail(e.target.value) } }  />
                    
                </div>
                <div className="right__form" >
                
                <Input validations={[required]} value={password} type="password" name="password1" placeholder=" password"    onChange={e=>setPassword(e.target.value)}  />
                
                
               
                <Select name='annee' value={annee}  onChange={e=>setAnnee(e.target.value)  }  validations={[required]}>
    <option value=''>entrer l'annee</option>
    <option value='3eme'>3eme année</option>
    <option value='4eme'>4éme année</option>
    <option value='5eme'>5éme année</option>
</Select>
    <Select   name='filliere'  value={filliere} onChange={e=>setFilliere(e.target.value)} validations={[required]}  >
    <option value=''>entrer votre filliere</option>
    <option value='GI'>G.info</option>
    <option value='GIND'>G.indus</option>
    <option value='GE'>G.Elec</option>
    <option value='GM'>G.Mecatronique</option>
    <option value='RST'>G.RST</option>
</Select>

                    <CheckButton className="button" ref={c => {btn = c;}} > sauvegarder </CheckButton>
                </div>
                </Form>
    {          error2 ? <h2  className="message">  {message } </h2>: null     }
    

        
          </div>
      </div>
    </div>
  )
}

export default UpdateStudent
