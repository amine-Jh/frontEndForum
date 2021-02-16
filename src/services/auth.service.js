import axios from "axios";
const URL="http://localhost:8080/api/auth/";

class AuthService {
    //first method for login request
    login(username, password){
      const resp= axios.post(URL+"signin",{username,password})
        .then(  response=> {  if(response.data.token){
        localStorage.setItem("user",JSON.stringify(response.data));}
        return response.data
    });
    
    return resp;
  }
// Creat a  new student
signupStuent(name,password,telephone,email,annee,filliere,username,photo)
{  
  const roles=["etudiant"]
  const resp= axios.post(URL+"signupStudent",{email,password,name,annee,roles,filliere,username,telephone,photo})
  .then(  response=> {  
return response.data
})
return resp;
}
// create a new company  Company
signupCompany(name,password,telephone,email,type,adresse,username,photo)
{
const roles=["company"]
const resp= axios.post(URL+"signupCompany",{email,password,name,adresse,type,username,telephone,roles,photo})
  .then(  response=> { 
    
    return response.data })
return resp;
}



logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("moredetails");
    
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getCurrentUserDetails( ){
    return JSON.parse(localStorage.getItem('moredetails'))
    
  }
}

export default  new AuthService();