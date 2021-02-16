"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpCommit = _interopRequireDefault(require("./http-commit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UploadPhotosService =
/*#__PURE__*/
function () {
  function UploadPhotosService() {
    _classCallCheck(this, UploadPhotosService);
  }

  _createClass(UploadPhotosService, [{
    key: "upload",
    value: function upload(file, username) {
      var pref = "http://localhost:8080/api/auth/";
      var formData = new FormData();
      formData.append("file", file);
      formData.append("username", username);
      return _httpCommit["default"].post(pref + "upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    }
  }, {
    key: "getFiles",
    value: function getFiles(idphoto) {
      return _httpCommit["default"].get("/api/auth/files/" + idphoto, {
        responseType: "blob"
      });
    }
  }, {
    key: "getPhoto",
    value: function getPhoto(idphoto) {
      return _httpCommit["default"].get("/api/auth/files/" + idphoto, {
        responseType: "blob"
      });
    }
  }]);

  return UploadPhotosService;
}();

var _default = new UploadPhotosService();

exports["default"] = _default;