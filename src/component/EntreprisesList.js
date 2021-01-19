import React, { useEffect, useState } from 'react'
import authHeader from '../services/auth-header'
import authService from '../services/auth.service'
import userData from '../services/user-data'

import UserService from '../services/user-data'
import "./css/EntrepriseList.css"

const EntreprisesList = () => {
    let id=authService.getCurrentUser().id;
    
const [companies,setCompanies]=useState([])

useEffect( ()=>{
    UserService.getAllCompanies().then( e=>{
        setCompanies(e) 
    })
},[])   



const postuler  =(e)=> {
    userData.postuler(id,e.target.value).then( r=>{
    
    localStorage.setItem("moredetails",JSON.stringify(r.data) )}
     )
    
}

const depostuler=(e)=>{
    UserService.depostuler(id, e.target.value  ).
    then( (e)=>{
        
    localStorage.setItem("moredetails",JSON.stringify(e.data) )
    console.log("ok",e.data)

} )
    
    
}
    
    return (
        <div  className="listentreprise" >
            <h2>  Liste des entreprises </h2>
          
          {
            companies.map(  item=>{ 
               
                console.log("*****")
                return (
                
                
                <div key={item.id}  id="badge" className="entreprisesList__body">
                   <div className="part1  part">
                       <div className="cercle">
                          
                       </div>
                       
                      
                        <button value={item.id} onClick={(e)=>depostuler(e)}  className="postuler" >  dePostuler </button> 
                      
            
                   </div>
                   <div   className="part">
                   <h3><span>nom :</span>  {item.name} </h3>
                   <h3><span>user-name: </span>  {item.username} </h3>
                   <h3> <span> adresse :</span>  {item.adresse}   </h3>
                   </div>

                   <div className="part">
                       <h3> <span>GSM : </span>  { item.telephone } </h3>
                       <h3> <span>type :  </span> {item.type} </h3>
                       <h3> <span>email :</span>  { item.email }   </h3>
                   </div>
          </div>
                )} )
          }   
          
          
        </div>
       
    )
}

export default EntreprisesList
