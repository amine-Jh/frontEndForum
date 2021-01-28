import React from 'react'

const UpdatePassword = () => {
    const [password1,setPassword1]=useState("");
    const [password2,setPassword2]=useState("");
    const [error,setError]=useState(false);
 useEffect(()=>{
    if( password1!==password2)
    setError(true)
    else{
     setError(false)
     setPassword(password1)
     
      }
  }
    ,[password1,password2])
    const vpassword = value => {
        if (value.length < 6 || value.length >30) 
          return(<span className="alert" > The password must be between 6 and 30 characters.</span>);
         };
    return (
        <div>
            password
        </div>
    )
}

export default UpdatePassword
