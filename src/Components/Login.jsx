import React from 'react'
import { auth, provider } from './firebaseconfig'
import "./login.css"
import GoogleButton from 'react-google-button'
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'
const Login = () => {
    const [{user},dispatch]=useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
               
            })
            ).catch(error=>(error.message))
           
    }
  return (
    <div className='login'>
        <div className="login_container">
        <div className="login_text">
            <h1>Sign In To App</h1>
        </div>
        <GoogleButton onClick={signIn} className="googlebutton">Sign In With Google</GoogleButton>
        </div>
    </div>
  )
}

export default Login