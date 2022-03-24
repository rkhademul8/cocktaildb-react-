import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import { FcGoogle } from "react-icons/fc";
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const Login = () => {
    // const {signInGoogle}=useFirebase()
    const {signInGoogle}=useAuth()
    const location=useLocation()
    const history=useHistory()
    const redirect_url=location.state?.from || '/home'

    const handleGoogleLogin=()=>{
        signInGoogle()

        .then(result=>{
            history.push(redirect_url)
        })
    }

    return (
        <div>
            <h5>Sign In with Google</h5> <br />
            
            <Button  onClick={handleGoogleLogin} variant="light"><FcGoogle /> Login</Button> 

            
            

            
        </div>
    );
};

export default Login;