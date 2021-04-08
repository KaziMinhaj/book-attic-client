import React from 'react';
import GoogleSignIn from './GoogleSignIn';
import SignIn from './SignIn';

const Login = () => {
    return (
        <div>
            <SignIn></SignIn>
            <GoogleSignIn></GoogleSignIn>
        </div>
    );
};

export default Login;