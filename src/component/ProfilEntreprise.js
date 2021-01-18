
import React, {  useEffect, useState } from 'react';

import UserService from '../services/user-data'
import authHeader from "../services/auth.service"
import "./css/ProfilStudent.css"
import "./css/Login.css"
import authService from '../services/auth.service';
import { useHistory } from 'react-router-dom';
import html2canvas from 'html2canvas';

var print = ()=> {

    let element =document.getElementById("badge");
    
   
}



const ProfilEntreprise = () => {
    const [UserInfo,SetUserinfo]=useState({});
    let history=useHistory()
    let id=authHeader.getCurrentUser().id;
     
useEffect(() => {
      
     

     
       UserService.getUserInfoCompany(id).then(
           res=> { 
               SetUserinfo (res.data) } ); 
      

     
   
    }, []);
   
    const deleteprofile=()=>{
        let verify=prompt("press d si tu veux supprimer")
        console.log(verify)
        if(verify==='d'){
      UserService.deleteMyProfileCompany(id)
      authService.logout();
      history.push("/");
      window.location.reload();
      }

     }
          return (<div className="body__profil" >
             
       <div  className="Profil__student"  >
          
           <h1  className="title__header" >  Hello { UserInfo.name } </h1>
          
          <div   id="badge" className="Profil__student__body">
                   <div className="body__1">
                       <div className="cercle">
                          
                       </div>
                       <h2> ENSA KENITRA </h2>
                   </div>
                   <div className="body__2">
                   <h3><span>nom :</span>  {UserInfo.name} </h3>
                   <h3><span>user-name: </span>  {UserInfo.username} </h3>
                   <h3> <span> adresse :</span>  {UserInfo.adresse}   </h3>
                   </div>

                   <div className="body__3">
                       <h3> <span>GSM : </span>  { UserInfo.telephone } </h3>
                       <h3> <span>type :  </span> {UserInfo.type} </h3>
                       <h3> <span>email :</span>  { UserInfo.email }   </h3>
                   </div>
          

          </div>

          <div className="Profil__buttons">
                   <button  className="Profil__button"   >Modifier le profile</button>
                   <button  onClick={()=>deleteprofile()} className="Profil__button" >Supprimer le profile</button>
                   <button onClick={ ()=> print() } className="Profil__button" > imprimer le badge </button>
                   <button   className="Profil__button" >Voir les entreprises</button>
          </div>

           
       </div>
       
       </div>
   )
}

export default ProfilEntreprise
