import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register Here !!!</h2>
            <form >
                <input type="text"  placeholder='name'/>
                <br />
                <input type="text" placeholder='enter your email'/>
                <br />
                <input type="text" placeholder='password'/>
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;