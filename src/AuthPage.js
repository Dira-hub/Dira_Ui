import React, { useState } from 'react';

const AuthPage = () => {
    // set empty username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Logic to authenticate user goes here
        console.log("Trying to log in with:", username, password);
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default AuthPage;
