import React, { useEffect, useState } from 'react'

const Login = ({ setCurrentUser, currentUser, setIsLoggedIn, isLoggedIn }) => {




    const [formData, setFormData] = useState({
        user_name: "",
        password: ""
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        let res = await req.json()
        setIsLoggedIn(true)
        setCurrentUser(res)
        console.log(res)

    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} >
                <label>
                    Username:
                    <input onChange={handleChange} type='text' name='user_name' />
                </label>
                <label>
                    Password:
                    <input onChange={handleChange} type='text' name='password' />
                </label>
                <input type='submit' value='Submit' />
            </form>

            <h1> welcome: {isLoggedIn ? currentUser.user.user_name : "not logged in"} </h1>
        </>
    )
}

export default Login