import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Home.css"
import image from "./images/1.png"
const Home = () => {
  
    return (
        <div  className="home" >
          <div className="home__container">
            <div className="left__banner">
                <h1  className="heading"  > Trouver un stage </h1>
                <h1  className="heading"  > Avec Ensak forum entreprises</h1>
                <h1  className="heading"  > Facilite la tache</h1>

                <p>  Visiter notre forum et trouver un stage d'une maniére trés facile  </p>
                <Link className="button__home" to={"/signupstudent"} > S'inscrire  </Link>
            </div>
            <div className="right__banner">
            <img src={image} alt="illustration"/>
            </div>


          </div>
        </div>
    )
}

export default Home
