import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from 'react';
import { UserContext } from "../../App";
import firebaseConfig from "../../firebase.config";
import "./GoogleSignIn.css";

const GoogleSignIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
  const handleClick = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('email')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {displayName} = result.user;
        const signedInUser = {name: displayName} 
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {        
        var errorMessage = error.message;            
        console.log(errorMessage);
      });
  };
  return (
    <div className="googleSignIn">
      <button onClick={handleClick}>
        Google SignIn
      </button>
    </div>
  );
};

export default GoogleSignIn;
