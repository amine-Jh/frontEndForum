import axios from "axios";
const URL="http://localhost:8080/api/auth/";

class AuthService {
    //first method for login request
    login(email, password){

    const resp= axios.post(URL+"signin",{email,password})
        .then(  response=> {  if(response.data.accessToken){
            localStorage.setItem("user",JSON.stringify(response.data));}
     return response.data
    });
    return resp;
    
}

signupStuent(name,password,telephone,email,annee,filliere,username)
{
  const resp= axios.post(URL+"signupStudent",{email,password,name,annee,filliere,username,telephone})
  .then(  response=> {  
return response.data
}).catch(  error=>{  <h1> {error} </h1>   })
return resp;
}


logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }


}

export default  new AuthService();