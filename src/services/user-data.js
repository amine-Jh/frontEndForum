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





  getAllCompanies() {
    return axios.get(API_URL +'companies', { headers: authHeader() });
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