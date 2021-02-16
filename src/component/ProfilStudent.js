
import React, {  useEffect, useState } from 'react';

import UserService from '../services/user-data'
import authHeader from "../services/auth.service"

import "./css/ProfilStudent.css"
import "./css/Login.css"
import userData from '../services/user-data';
import authService from '../services/auth.service';
import { useHistory ,Link} from 'react-router-dom';
import uploadService from '../services/upload-service';



const ProfilStudent = () => {
    const [UserInfo,SetUserinfo]=useState({});
    const [src,setSrc]=useState("");
    const id=authHeader.getCurrentUser().id;
    let history=useHistory();
    useEffect(() => {
       UserService.getUserInfoStudent(id).then(
            res=> {  console.log("data :",res.data)
                SetUserinfo(res.data) 
                
                uploadService.getFiles(res.data.photo.id).then(e=>{
                const objectURL = URL.createObjectURL(e.data)
                setSrc(objectURL)
            }
           )}); 
               
     
            },[id]);
            
       const deleteprofile=()=>{
        let verify=prompt("appuyer sur 'd' si tu veux supprimer");
        if(verify==='d'){
        userData.deleteMyProfileStudent(id)
        authService.logout();
        history.push("/");
        window.location.reload();
        }
}
       console.log("render time")
           return (
               <div className="profil__container">
                <div className="body__profil" >
                <div className="Profil__buttons">
                    <Link  className="Profil__Link"  to={`/student/edit/${id}`} >modifier le profile </Link>
                    <button onClick={()=>deleteprofile()}  className="Profil__button" >Supprimer le profile</button>
                    <button  className="Profil__button" > imprimer le badge </button>
                    <button   className="Profil__button" >Voir les entreprises</button>
                </div>
        <div  className="Profil__student"  >
           <h1 className="title__header" >  Mon Profile <i class="fas fa-id-card"></i> </h1>
           <div className="Profil__student__body">
           
                    <div className="body__1">
                        <img src={UserInfo.photo?src:""}  className="cercle" alt="hello"/> 
                    <h2> ENSA KENITRA </h2>
                    </div>
                    <div className="body__2">
                    <h3><span>nom :</span>  {UserInfo.name} </h3>
                    <h3><span>user-name: </span>  {UserInfo.username} </h3>
                    <h3> <span> filliere :</span>  {UserInfo.filliere}   </h3>
                    </div>

                    <div className="body__3">
                        <h3> <span>GSM : </span>  { UserInfo.telephone } </h3>
                        <h3> <span>année :  </span> {UserInfo.annee} </h3>
                        <h3> <span>email :</span>  { UserInfo.email }   </h3>
                    </div>
            
            

           </div>
            
         

            
        </div></div></div>
    )
}

export default ProfilStudent
