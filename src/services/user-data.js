import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/resources/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'etudiants');
  }

  getUserInfoStudent(id) {
    return axios.get(API_URL + 'etudiants/'+id, { headers: authHeader() })
    }

  getUserInfoCompany(id) {

    return axios.get(API_URL + 'companies/'+id, { headers: authHeader() })
    }


    updateStudent(id,annee,telephone,email,filliere,name,password){
      return axios.put( API_URL+'etudiants/'+id, {name,email,telephone,annee,filliere,password
      
      } ,{headers :authHeader()})
    }
    
    updateCompany(id,type,telephone,email,adresse,name,password){
    return axios.put( API_URL+'companies/'+id, {name,email,telephone,adresse,type,password
      
      } ,{headers :authHeader()})
    }





  getAllCompanies() {
  return axios.get(API_URL +'companies', { headers: authHeader() },{ responseType: 'blob' })

  } 

  postuler(id,ids){
    let user=
    axios.post(API_URL+"postuler/"+id+"/company/"+ids,{},{ headers: authHeader()}).then
    ( r=>  {
      return r;
})
return user;
  }

  depostuler(id,ids){
    
    let user=
     axios.post(API_URL+"depostuler/"+id+"/company/"+ids,{},{ headers: authHeader()}).then
     ( r=>  {
       return r;
 })
 return user;
    
   }


  deleteMyProfileStudent(id){
    axios.delete(API_URL+'etudiants/'+id,{ headers: authHeader() } )
  }

  deleteMyProfileCompany(id){
    axios.delete(API_URL+'companies/'+id,{ headers: authHeader() } )
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();