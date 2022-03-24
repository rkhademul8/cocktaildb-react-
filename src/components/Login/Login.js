import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInGoogle}=useFirebase()
    return (
        <div>
            <button onClick={signInGoogle}>Login with google</button>
        </div>
    );
};

export default Login;