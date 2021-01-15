"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _authHeader = _interopRequireDefault(require("./auth-header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API_URL = 'http://localhost:8080/resources/';

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, [{
    key: "getPublicContent",
    value: function getPublicContent() {
      return _axios["default"].get(API_URL + 'etudiants');
    }
  }, {
    key: "getUserInfoStudent",
    value: function getUserInfoStudent(id) {
      return _axios["default"].get(API_URL + 'etudiants/' + id, {
        headers: (0, _authHeader["default"])()
      });
    }
  }, {
    key: "getUserInfoCompany",
    value: function getUserInfoCompany(id) {
      return _axios["default"].get(API_URL + 'companies/' + id, {
        headers: (0, _authHeader["default"])()
      });
    }
  }, {
    key: "getAllCompanies",
    value: function getAllCompanies() {
      return _axios["default"].get(API_URL + 'companies', {
        headers: (0, _authHeader["default"])()
      });
    }
  }, {
    key: "deleteMyProfileStudent",
    value: function deleteMyProfileStudent(id) {
      _axios["default"]["delete"](API_URL + 'etudiants/' + id, {
        headers: (0, _authHeader["default"])()
      });
    }
  }, {
    key: "deleteMyProfileCompany",
    value: function deleteMyProfileCompany(id) {
      _axios["default"]["delete"](API_URL + 'companies/' + id, {
        headers: (0, _authHeader["default"])()
      });
    }
  }, {
    key: "getAdminBoard",
    value: function getAdminBoard() {
      return _axios["default"].get(API_URL + 'admin', {
        headers: (0, _authHeader["default"])()
      });
    }
  }]);

  return UserService;
}();

var _default = new UserService();

exports["default"] = _default;