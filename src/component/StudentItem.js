import React, { useEffect, useState } from 'react'
import uploadService from '../services/upload-service'

const StudentItem = (props) => {
    const [src,SetSrc]=useState("");
    useEffect(
        ()=>{
            uploadService.getFiles(props.photo.id).then(e=>{
               const url = URL.createObjectURL(e.data)
               SetSrc(url)
            })},[1])


  return (
    <div key={props.id}  id="badge" className="entreprise__item" >
                   <div className="entreprise__item__photo">
                       <img src={src}   className="cercle"  alt="profile"/>
                   </div>
                   <div  className="entreprise__item__part">
                        <h3><span>nom :</span>  {props.name} </h3>
                        <h3><span>user-name: </span>  {props.username} </h3>
                        <h3> <span> année :</span>  {props.annee}   </h3>
                   </div>

                   <div  className="entreprise__item__part">
                       <h3> <span>GSM : </span>  { props.telephone } </h3>
                       <h3> <span>filliére :  </span> {props.filliere} </h3>
                       <h3> <span>email :</span>  { props.email }   </h3>
                   </div>
          </div>
  )
}

export default StudentItem
