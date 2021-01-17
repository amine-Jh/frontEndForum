import React from 'react'
import UserService from '../services/user-data'

const EntreprisesList = () => {

    UserService.getAllCompanies().then( e=> e.data.map(  e=>console.log("entr",e)  )     )
    return (
        <div>
           <h1> les entreprises</h1> 
        </div>
    )
}

export default EntreprisesList
