import {React ,useEffect,useState  }from 'react'
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import Select   from 'react-validation/build/select';
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import "./css/Login.css";
import "./css/SignUp.css"

import { useHistory } from 'react-router-dom';
import userData from '../services/user-data';
import authService from '../services/auth.service';

const UpdateCompany = () => {
    let forml;
    let btn;
      const [name,setName]=useState("");
      const [message,setMessage]=useState("");
      const [password,setPassword]=useState("");
      const [adresse,setAdresse]=useState("");
      const [telephone,setTelephone]=useState("");
      const [type,setType]=useState("");
      const [emailv,setEmail]=useState("");
      const [id,setId]=useState(0);
      let history=new useHistory();

      console.log(name)
      useEffect(()=>{
        let user=authService.getCurrentUserDetails();
        console.log(user)
        setId(user.id)
        setType(user.type)
        setEmail(user.email)
        setName(user.name)
        setTelephone(user.telephone)
        setAdresse(user.adresse)
       
        }  
      ,[])
      const vPhone=value=>{
        const re = /^[0-9\b]+$/;
        if(!re.test(value))
        return <div className="alert" >  entrer un nombre valide </div>
        
      }


      const handleLogin=(e)=>{
        e.preventDefault();
       
        forml.validateAll();
        if (btn.context._errors.length === 0) {
        userData.updateCompany(id,type,telephone,emailv,adresse,name,password).then(e=>{
            if(e.data.message){
               setMessage(e.data.message)
            }
            else{
                localStorage.setItem("moredetails",JSON.stringify(e.data)) 
                history.push("/ProfilEntreprise")
             
            }
            
    
    } )
       
        }
       
      
      }
    
    
    
      const vpassword = value => {
        if (value.length < 6 || value.length > 30) 
          return(<div className="alert"  >
            password entre 6 et 20 caractéres
            </div>);
         
        
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
                <h2> Pour les entreprises </h2>
              <div className="signup__container">
                  
                <Form  ref={  e=>forml=e } onSubmit={e=>handleLogin(e)} className="register__form" >  
                
                    <div className="left__form" >
                        <Input validations={[required]} type="text" name="name" placeholder="Nom" value={name}   onChange={e=>setName(e.target.value)}  />
                        <Input validations={[required,vPhone]} type="tel" name="telephone" placeholder="telephone" value={telephone}   onChange={e=>setTelephone(e.target.value)} />
                        <Input validations={[required,email]}  type="email" name="email" placeholder="email" value={emailv}   onChange={e=>{ setEmail(e.target.value) } }  />
                        <Select   value={type}  name='type' onChange={e=>setType(e.target.value)} validations={[required]}  >
        <option value=''>Type d'entreprise</option>
        <option value='société en nom collectif'>société en nom collectif </option>
        <option value='société en commandité'>société en commandité</option>
        <option value='société  par action'>société  par action</option>
        <option value='coopérative'>coopérative</option>
        
    </Select>
                      
                    </div>
                    <div className="right__form" >
                    
                    
<Textarea name='adresse' validations={[required]} placeholder="adresse"  value={adresse} onChange={e=>setAdresse(e.target.value)} />
      
<Input validations={[required,vpassword]} type="password" name="password"    placeholder="mot de passe" onChange={e=>setPassword(e.target.value)}  />
    
                        <CheckButton className="button"  ref={c => {btn = c;}} > S'inscrire </CheckButton>
                    </div>
                    </Form>
    <h2  className="message" >  {message} </h2>
    
            
              </div>
              
          </div>
        </div>
      )
}

export default UpdateCompany
