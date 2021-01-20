import React, { useEffect, useState } from 'react'
import authService from '../services/auth.service';

const ListStudent = () => {
    const [ etudiants,setEtudiants ]=useState([])
   console.log("etuuuuudiiians",etudiants)
    
    useEffect(() => {
            setEtudiants(authService.getCurrentUserDetails().etudiants)
             return false        
    },[]);

    return (
        <div>
            {
            etudiants.map(  item=>{ 
                
                return (
                
             
                <div key={item.id}  id="badge" className="entreprisesList__body">
                   <div className="part1  part">
                       <div className="cercle">
                          
                       </div>
                   
                
               

                   </div>
                   <div   className="part">
                   <h3><span>nom :</span>  {item.name} </h3>
                   <h3><span>user-name: </span>  {item.username} </h3>
                   <h3> <span> année :</span>  {item.annee}   </h3>
                   </div>

                   <div className="part">
                       <h3> <span>GSM : </span>  { item.telephone } </h3>
                       <h3> <span>filliére :  </span> {item.filliere} </h3>
                       <h3> <span>email :</span>  { item.email }   </h3>
                   </div>
          </div>
                )} )
          }   
        </div>
    )
}

export default ListStudent
