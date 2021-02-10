import http from "./http-commit";


class UploadPhotosService {
 
  upload(file,username) {
      let pref="http://localhost:8080/api/auth/";
      let formData = new FormData();
     formData.append("file", file);
     formData.append("username",username)

    return http.post(pref+"upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  getFiles(idphoto) {
    return http.get("/api/auth/files/"+idphoto,{ responseType: "blob" })
    ;
  }

  getPhoto(idphoto) {
    return http.get("/api/auth/files/"+idphoto)
    ;
  }
}

export default new UploadPhotosService();