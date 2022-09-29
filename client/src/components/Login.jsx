import React, { useState } from 'react'

const Login = ({ setCurrentUser, currentUser, setIsLoggedIn, isLoggedIn }) => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(userData => {
                            console.log("logged in")
                            setError('')
                            setCurrentUser(userData)
                        })
                } else {
                    console.log("failed to log in")
                    res.json()
                        .then(({ error }) => setError(error))
                }
            })

    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    if (currentUser && currentUser.id) {
        return (
            <div>
                Already logged in!
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleLogin}>

                <p style={{ color: 'red' }}>{error ? error : null}</p>

                <p>Login:</p>

                <input
                    type="text" onChange={handleChangeUsername} value={username} placeholder='username'
                />

                <input
                    type="text" onChange={handleChangePassword} value={password} placeholder='password'
                />

                <input
                    type="submit" value="Login"
                />

            </form>
        </div>
    )
}

export default Login


