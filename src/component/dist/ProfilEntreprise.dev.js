"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _userData = _interopRequireDefault(require("../services/user-data"));

var _auth = _interopRequireDefault(require("../services/auth.service"));

require("./css/ProfilStudent.css");

var _reactRouterDom = require("react-router-dom");

var _html2canvas = _interopRequireDefault(require("html2canvas"));

var _uploadService = _interopRequireDefault(require("../services/upload-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProfilEntreprise = function ProfilEntreprise() {
  /*
  const [UserInfo,SetUserinfo]=useState({});
  const [src,setSrc]=useState("");
  let history=useHistory()
  let id=authHeader.getCurrentUser().id;
  
  useEffect(() => {
      UserService.getUserInfoCompany(id).then(
         res=> {
          SetUserinfo (res.data)
          uploadService.getFiles(res.data.photo.id).then(e=>{
              const objectURL = URL.createObjectURL(e.data)
              setSrc(objectURL)
          })
          }); 
     },[id]);
  
  const deleteprofile=()=>{
      let verify=prompt("press d si tu veux supprimer")
      
      if(verify==='d'){
    UserService.deleteMyProfileCompany(id)
    authService.logout();
    history.push("/");
    window.location.reload();
    }
     }
        return (
            <div className="profil__container">
        <div className="body__profil" >
        <div className="Profil__buttons">
        <Link  className="Profil__Link"  to={`/company/edit/${id}`} >modifier le profile </Link>
                 <button  onClick={()=>deleteprofile()} className="Profil__button" >Supprimer le profile</button>
                 <button  className="Profil__button" > imprimer le badge </button>
                 <button   className="Profil__button" >Voir les entreprises</button>
        </div>
     <div  className="Profil__student"  >
        
         <h1  className="title__header" > votre profile </h1>
        
        <div   id="badge" className="Profil__student__body">
                 <div className="body__1">
                     <div className="cercle">
                     <img src={UserInfo.photo?src:""}  className="cercle" alt="hello" /> 
                     </div>
                     <h2> ENSA KENITRA </h2>
                 </div>
                 <div className="body__2">
                 <h3><span>nom :</span>  {UserInfo.name} </h3>
                 <h3><span>user-name: </span>  {UserInfo.username} </h3>
                 <h3> <span> adresse :</span>  {UserInfo.adresse}   </h3>
                 </div>
                   <div className="body__3">
                     <h3> <span>GSM : </span>  { UserInfo.telephone} </h3>
                     <h3> <span>type :  </span> {UserInfo.type} </h3>
                     <h3> <span>email :</span>  { UserInfo.email}   </h3>
                 </div>
        
          </div>
        
           
     </div>
     </div>
     </div>
  )
        */
};

var _default = ProfilEntreprise;
exports["default"] = _default;