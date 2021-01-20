import React, { useEffect, useState } from 'react'
import authHeader from '../services/auth-header'
import authService from '../services/auth.service'
import userData from '../services/user-data'

import UserService from '../services/user-data'
import "./css/EntrepriseList.css"

const EntreprisesList = () => {
let id=authService.getCurrentUser().id;
    
const [companies,setCompanies]=useState([])
const [isOnline,setIsOnline]=useState(false);
useEffect( ()=>{
   
    UserService.getAllCompanies().then( e=>{
    setCompanies(e) 
     })
},[isOnline])   



const postuler=(e)=> {
    userData.postuler(id,e.target.value).then( r=>{
    localStorage.setItem("moredetails",JSON.stringify(r.data) )
    console.log("TTZADT",r.data)
    setIsOnline(e=>!e)
})
    
    
    }

const depostuler=(e)=>{
    UserService.depostuler(id, e.target.value  ).
    then( (e)=>{
    localStorage.setItem("moredetails",JSON.stringify(e.data) )
    console.log("T7YDAAAAT",e.data)
    setIsOnline(e=>!e)

} )
}
    
    return (
        <div  className="listentreprise" >
            <h2>  Liste des entreprises </h2>
          
          {
            companies.map(  item=>{ 
                 let exist= authService.getCurrentUserDetails().companies.
                some(person => person.id === item.id) ;
               console.log(item.id,authService.getCurrentUserDetails().companies.
               some(person => person.id === item.id))
                return (
                
             
                <div key={item.id}  id="badge" className="entreprisesList__body">
                   <div className="part1  part">
                       <div className="cercle">
                          
                       </div>
                      { 
                exist ?
                 <button value={item.id} onClick={(e)=>depostuler(e)}  className="postuler" >  dePostuler </button> 
                 :   <button value={item.id} onClick={(e)=>postuler(e)}  className="postuler" > Postuler </button>   }
            
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
