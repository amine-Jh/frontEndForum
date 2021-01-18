import React, { useState } from 'react'
import UserService from '../services/user-data'
import "./css/EntrepriseList.css"

const EntreprisesList = () => {

const [companies,setCompanies]=useState([])

UserService.getAllCompanies(   ).then( e=>setCompanies(e) )

    
    return (
        <div  className="listentreprise" >
          
          {
            companies.map(   e=>{  return (
                
                <div  className="Profil__student"  >
                <div   id="badge" className="Profil__student__body">
                   <div className="body__1">
                       <div className="cercle">
                          
                       </div>
                       <h2> ENSA KENITRA </h2>
                   </div>
                   <div className="body__2">
                   <h3><span>nom :</span>  {e.name} </h3>
                   <h3><span>user-name: </span>  {e.username} </h3>
                   <h3> <span> adresse :</span>  {e.adresse}   </h3>
                   </div>

                   <div className="body__3">
                       <h3> <span>GSM : </span>  { e.telephone } </h3>
                       <h3> <span>type :  </span> {e.type} </h3>
                       <h3> <span>email :</span>  { e.email }   </h3>
                   </div>
          

          </div>

         
           
       </div>
                )} )
          }   
          
          
        </div>
       
    )
}

export default EntreprisesList
