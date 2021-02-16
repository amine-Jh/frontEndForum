import React, { useEffect, useState } from 'react'
import authService from '../services/auth.service';
import uploadService from '../services/upload-service';
import userData from '../services/user-data';
import UserService from '../services/user-data'
import "./css/EntrepriseItem.css"

const EntrepriseItem = (props) => {
    const [isOnline,setIsOnline]=useState(false);
    const [src,SetSrc]=useState("");
    let id=authService.getCurrentUser().id;
    /***   postuler  */
    const postuler=(e)=> {
        userData.postuler(id,e.target.value).then( r=>{
        localStorage.setItem("moredetails",JSON.stringify(r.data) )
        setIsOnline(!isOnline)
    })}
    const depostuler=(e)=>{
        UserService.depostuler(id, e.target.value  ).then( (e)=>{
        localStorage.setItem("moredetails",JSON.stringify(e.data) )
        setIsOnline(!isOnline)
    })
    }
    console.log("phooooto  render****")
    useEffect(
        ()=>{
            uploadService.getFiles(props.photo.id).then(e=>{
               const url = URL.createObjectURL(e.data)
               SetSrc(url)
            })},[1])

       
    let exist= authService.getCurrentUserDetails().companies.some(person => person.id === props.id);
  return (
    
        <div className="entreprise__item" id="badge" >
            <div  className="entreprise__item__photo"  >
                   
                    <img src={src}  className="cercle"  alt="hello" /> 
                { 
            exist ?
            <button value={props.id} onClick={(e)=>depostuler(e)}  className="postuler" >  dePostuler </button> 
            : <button value={props.id} onClick={(e)=>postuler(e)}  className="depostuler" > Postuler </button>  
            }
            </div>
            <div   className="entreprise__item__part">
               <h3><span>nom :</span>  {props.name} </h3>
               
               <h3> <span> adresse :</span>  {props.adresse}   </h3>
            </div>
            <div className="entreprise__item__part">
                   <h3> <span>GSM : </span> {props.telephone} </h3>
                   <h3> <span>type :  </span> {props.type} </h3>
                   <h3> <span>email :</span>  {props.email}   </h3>
            </div>
           
      </div>
      
    
  )
}

export default EntrepriseItem
