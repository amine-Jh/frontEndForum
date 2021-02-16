import React, { useEffect, useState } from 'react'
import authService from '../services/auth.service'
import UserService from '../services/user-data'
import "./css/EntrepriseList.css"
import EntrepriseItem from './EntrepriseItem'

const EntreprisesList = () => {
let id=authService.getCurrentUser().id;
const [companies,setCompanies]=useState([]);


useEffect( ()=>{
  UserService.getAllCompanies().then(
    e=>{
         setCompanies(e.data)
        }
  ).catch( err=>console.log("error  :" ,err))
},[])  

console.log("rendr****")

const display=(data)=>{
    return    data.map(  item=>{ 
      return (
            
            <EntrepriseItem  name={item.name} 
               username={item.username} adresse={item.adresse} telephone={item.telephone}
               email={item.email} id={item.id} type={item.type} photo={item.photo}
               />
     
            )} )}



    return (
        <div  className="listentreprise" >
            <h2>Liste des entreprises </h2>
          
          {  display(companies)    }
          
        </div>
       
    )
}

export default EntreprisesList
