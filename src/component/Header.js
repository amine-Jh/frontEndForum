import React, { useEffect, useState } from 'react'
import authHeader from "../services/auth.service"
import {Link, Redirect, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import SignupEntrep from './SignupEntrep'
import ProfilEntreprise from './ProfilEntreprise'
import ProfilStudent from './ProfilStudent'
import SignupStudent from './SignupStudent'
import EntreprisesList from './EntreprisesList'
import authService from '../services/auth.service'
import "./css/Header.css"

const Header = () => {
    let history=new useHistory();

    console.log("headerrrr")
    const logouts=()=>{  
        authService.logout() ;
      history.push("/home");
      window.location.reload();
    }


    const [isCompany,setCompany]=useState(false);
    const [isAdmin,setAdmin]=useState(false);
    const [isStudent,setStudent]=useState(false);
    const [ isAuth,setAuth ]=useState(false)
    useEffect(()=>{
        if(authHeader.getCurrentUser()){
        setAdmin(authHeader.getCurrentUser().roles.includes("ROLE_ADMIN"))
        setCompany(authHeader.getCurrentUser().roles.includes("ROLE_COMPANY"))
        setStudent(authHeader.getCurrentUser().roles.includes("ROLE_ETUDIANT"))
        setAuth(true);
        }
    
    },[])
    
    


    return (
        <div>
            <header> 
       <div className="left__header">
       <Link className="link" to={"/home"} className="left__header__li">
           ENSAKFORUM
        </Link>
        </div>
       <div className="right__header">
           
           { !isAuth &&
            <ul>
            <Link className="link" to={"/signupstudent"} > <div href="#">S'inscrire Etudiant</div>  </Link>
            <Link className="link" to={"/signupCompany"} > <div href="#">S'inscrire Entreprise </div>  </Link>
            <Link  className="link" to={"/login"} className="login__buton" > <div  className="connect_i" >Se connecter</div>  </Link>
         </ul>
           }
           { isCompany &&
            <ul>
           <li onClick={ logouts } className="link"  ><div href="">logout</div> </li>
           <Link  className="link"  to={"/entreprises"} > <div href="#">Entreprises</div>  </Link>
           <Link className="link" to={"/ProfilEntreprise"}  className="login__buton" > <div className="connect_i"  href="#">Voir Profil</div> 
            </Link>
         </ul>
           }
            
            { isStudent &&
            <ul>
            <li className="link" onClick={ logouts }  > logout</li>
           <Link className="link" to={"/ProfilStudent"} > <div href="#"> {authHeader.getCurrentUser().name}  </div>  </Link>
           <Link className="link" to={"/entreprises"}  className="login__buton" > <div href="#"> list entreprises</div> 
            </Link>
         </ul>
           }


        </div>
     </header>
     
     
     <Switch>
     
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/signupCompany" component={SignupEntrep} />
            <Route exact path="/SignupStudent" component={SignupStudent} />
            <Route path="/ProfilStudent" component={ isAuth && ProfilStudent} />
            <Route path="/ProfilEntreprise" component={isAuth && ProfilEntreprise}   />
            <Route path="/entreprises" component={ isAuth && EntreprisesList}   />
            
    </Switch>
    </div>
    )
}

export default Header
