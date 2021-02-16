"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var URL = "http://localhost:8080/api/auth/";

var AuthService =
/*#__PURE__*/
function () {
  function AuthService() {
    _classCallCheck(this, AuthService);
  }

  _createClass(AuthService, [{
    key: "login",
    //first method for login request
    value: function login(username, password) {
      var resp = _axios["default"].post(URL + "signin", {
        username: username,
        password: password
      }).then(function (response) {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });

      return resp;
    } // Creat a  new student

  }, {
    key: "signupStuent",
    value: function signupStuent(name, password, telephone, email, annee, filliere, username, photo) {
      var roles = ["etudiant"];

      var resp = _axios["default"].post(URL + "signupStudent", {
        email: email,
        password: password,
        name: name,
        annee: annee,
        roles: roles,
        filliere: filliere,
        username: username,
        telephone: telephone,
        photo: photo
      }).then(function (response) {
        return response.data;
      });

      return resp;
    } // create a new company  Company

  }, {
    key: "signupCompany",
    value: function signupCompany(name, password, telephone, email, type, adresse, username, photo) {
      var roles = ["company"];

      var resp = _axios["default"].post(URL + "signupCompany", {
        email: email,
        password: password,
        name: name,
        adresse: adresse,
        type: type,
        username: username,
        telephone: telephone,
        roles: roles,
        photo: photo
      }).then(function (response) {
        return response.data;
      });

      return resp;
    }
  }, {
    key: "logout",
    value: function logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("moredetails");
    }
  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));
    }
  }, {
    key: "getCurrentUserDetails",
    value: function getCurrentUserDetails() {
      return JSON.parse(localStorage.getItem('moredetails'));
    }
  }]);

  return AuthService;
}();

var _default = new AuthService();

exports["default"] = _default;