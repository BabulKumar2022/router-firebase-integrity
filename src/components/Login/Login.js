import React from 'react';
import useFirebase from '../Hooks/useFirebase';


const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h1>Please Login</h1>
            <div style={{margin:'30px'}}>
             <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
          
            <form >
                <input type="text" placeholder='enter your email'/>
                <br />
                <input type="text" placeholder='password'/>
                <br />
                <input  type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;