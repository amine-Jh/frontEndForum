import React, { useEffect, useState } from 'react'
import authService from '../services/auth.service';
import StudentItem from './StudentItem';

const ListStudent = () => {
    const [ etudiants,setEtudiants ]=useState([])

   useEffect(() => {
            setEtudiants(authService.getCurrentUserDetails().etudiants)
                    
    },[]);

    return (
        <div  className="listentreprise" >
            <h1> liste des candidats </h1>
            {etudiants.map(  item=>{ 
                console.log("iteem :",item)
                return (
                <StudentItem   key={item.id} id={item.id}  name={item.name} 
                   annee={item.annee}  telephone={item.telephone}   filliere={item.filliere}
                  email= {item.email} photo={item.photo}
                   />
            )})
          }   
        </div>
    )
}

export default ListStudent
