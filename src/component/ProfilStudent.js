import React from 'react';
import AuthService from '../services/auth.service';

const ProfilStudent = () => {

const user=AuthService.getCurrentUser();
console.log("thats is  ----",user)

    return (
        <div>
            name : { user.name } //
            username: {user.username}
        </div>
    )
}

export default ProfilStudent
