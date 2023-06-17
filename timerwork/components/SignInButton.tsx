import React from'react';
import styles from '../styles/signIn.module.css';

const SignInButton : React.FC = () => {
    const handleSignIn = () => {
        // Logic for createing an account or logging in goes here
        // this can be a function or a callback passed as a prop
        console.log('Sign in');
    };

    return (
        <button className={styles.signInButton} onClick={handleSignIn}>
            Sign in
        </button>
    );
}

export default SignInButton;
