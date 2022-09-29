import { useState } from "react"
import { Navigate } from "react-router-dom"

const Register = () => {

    const [leaving, setLeaving] = useState(false)

    const postNewUser = async (e) => {
        let req = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_name: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            })
        })
        let res = await req.json()
        console.log(res)

        if (res) {
            setLeaving(true)
        }
    }

    const submitNewUser = (e) => {
        e.preventDefault()
        postNewUser(e)
    }

    if (leaving) return <Navigate to='/login' />

    return (
        <div >
            <h1>Sign up</h1>
            <div >
                <form onSubmit={submitNewUser}>
                    <input name='username' type='username' placeholder="username..." /><br />

                    <input name="password" type='password' placeholder="password..." /><br />

                    <input name='email' type='email' placeholder="email..." /><br />

                    <input type='submit' placeholder="email..." />
                </form>
            </div>
        </div>
    )
}

export default Register;