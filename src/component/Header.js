import React, { useEffect, useState } from 'react'
import authHeader from "../services/auth.service"
import {Link, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import SignupEntrep from './SignupEntrep'
import ProfilEntreprise from './ProfilEntreprise'
import ProfilStudent from './ProfilStudent'
import SignupStudent from './SignupStudent'
import UpdateStudent from './UpdateStudent'
import EntreprisesList from './EntreprisesList'
import authService from '../services/auth.service'
import "./css/Header.css"
import userData from '../services/user-data';
import ListStudent from './ListStudent';
import UpdateCompany from './UpdateCompany';

const Header = () => {
    let history=new useHistory();
    const logouts=()=>{  authService.logout() ;
        history.push("/home");
        window.location.reload();
    }


    const [isCompany,setCompany]=useState(false);
    const [isAdmin,setAdmin]=useState(false);
    const [isStudent,setStudent]=useState(false);
    const [ isAuth,setAuth ]=useState(false)
    useEffect(()=>{
        if(authHeader.getCurrentUser())
        {
          setAdmin(authHeader.getCurrentUser().roles.includes("ROLE_ADMIN"))
        setCompany(authHeader.getCurrentUser().roles.includes("ROLE_COMPANY"))
        setStudent(authHeader.getCurrentUser().roles.includes("ROLE_ETUDIANT"))
        setAuth(true);
          let id=authHeader.getCurrentUser().id
          if(isCompany){
            console.log("compaaany")
            userData.getUserInfoCompany(id).then( r=>
              localStorage.setItem("moredetails",JSON.stringify(r.data))
              
              )
          }
          if(isStudent){
            console.log("stuuudentt")
            userData.getUserInfoStudent(id).then( r=> 
            {  console.log("daaata",r.data)
              localStorage.setItem("moredetails",JSON.stringify(r.data) )  })}
        }
    },[isAuth])
    console.log("object")
/** mmm  */
    const open=(e)=>{
      let nav=document.getElementById("nav")

      if(e.target.classList.contains("rotate"))
     { 
       e.target.classList.remove("rotate")
      nav.classList.remove("open")
      nav.classList.add("right__header__phone")
    }
      else
      {
        e.target.classList.add("rotate")
        nav.classList.add("open")
        nav.classList.remove("right__header__phone")
      }
    }

    
    
    


    return (
        <>
        <header> 
          <div className="header__container">
          <div className="left__header">
          <Link className="link left__header__li" to={"/home"} >
           ENSAKFORUM
          </Link>
          </div>
       
           
           { !isAuth &&
           <div className="right__header">
            <ul  className="right__header__desktop"  >
            <Link className="link" to={"/signupstudent"} > <div href="#">S'inscrire Etudiant</div>  </Link>
            <Link className="link" to={"/signupCompany"} > <div href="#">S'inscrire Entreprise </div>  </Link>
            <Link  className="link login__buton" to={"/login"}  > <div  className="connect_i" >Se connecter</div>  </Link>
           </ul>
          </div>
           }
           { isCompany &&
           <div className="right__header2">
            <ul  className="auth   right__header__desktop" >
              <Link  className="link"  to={"/candidats"} > <div >candidats</div> </Link>
              <Link className="link login__buton" to={"/ProfilEntreprise"}   > <div className="connect_i"  href="#">Profile </div> 
              </Link>
              <Link onClick={ logouts } className="link "  ><div href="">logout</div> </Link>
            </ul>
            </div>
           }
            
            { isStudent &&
            <div className="right__header2">
            <ul  className=" auth right__header__desktop" >
           
           <Link className="link" to={"/ProfilStudent"} > <div href="#"> {authHeader.getCurrentUser().name} <i class="fas fa-user"></i> </div>  </Link>
           <Link className="link login__buton" to={"/entreprises"}  > <div className="connect_i"> list entreprises <i class="far fa-building"></i> </div> 
            </Link>
            <Link className="link " onClick={ logouts }  > logout <i class="fas fa-sign-out-alt"></i></Link>
         </ul></div>
           }

            <div  onClick={(e)=>open(e)}  className="bar" >
            <i  class="fas fa-bars bar"></i>
            </div>
            </div>
        { !isAuth &&
           <div className="right__header__phone "  id="nav" >
            <ul  className="phone__navbar"  >
            <Link className="link__phone" to={"/signupstudent"} > <div >S'inscrire Etudiant</div>  </Link>
            <Link className="link__phone" to={"/signupCompany"} > <div >S'inscrire Entreprise </div>  </Link>
            <Link  className="link__phone" to={"/login"}  > <div   >Se connecter</div>  </Link>
           
           </ul>
          
           </div>
           }  
           { isCompany &&
           <div className="right__header__phone "  id="nav" >
            <ul  className="phone__navbar" >
           
           <Link  className="link__phone"  to={"/candidats"} > <div href="#">candidats</div> </Link>
           <Link className="link__phone" to={"/ProfilEntreprise"}   > <div className="connect_i"  href="#">Profile </div> 
            </Link>
            <Link onClick={ logouts } className="link__phone logout"  ><div href="">logout</div> </Link>
         </ul></div>
           }

        { isStudent &&
            <div className="right__header__phone"   id="nav">
            <ul  className="phone__navbar" >
           
           <Link className="link__phone" to={"/ProfilStudent"} > <div href="#"> {authHeader.getCurrentUser().name} <i class="fas fa-user"></i> </div>  </Link>
           <Link className="link__phone" to={"/entreprises"}  > <div > list entreprises <i class="far fa-building"></i> </div> </Link>
            <Link className="link__phone logout" onClick={ logouts }  > logout <i class="fas fa-sign-out-alt"></i></Link>
         </ul></div>
           }
           
     </header>

      <Switch>

            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/signupCompany" component={SignupEntrep} />
            <Route exact path="/candidats" component={ListStudent} />
            <Route exact path="/SignupStudent" component={SignupStudent} />
            <Route path="/ProfilStudent" component={ isAuth && ProfilStudent} />
            <Route path="/ProfilEntreprise" component={isAuth && ProfilEntreprise}   />
            <Route path="/entreprises" component={ isAuth && EntreprisesList}   />
             <Route   path={`/student/edit/:id`}  component={UpdateStudent} />
             <Route   path={`/company/edit/:id`}  component={UpdateCompany} />
            
           
            
    </Switch>
        
           
    

     
     
    
    </>
    )
}

export default Header
