import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"


const Register = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <div className="sign-up">
            <div >
                <form
                    className='login-form'
                    onSubmit={submitNewUser}>
                    <h1>Sign up:</h1>

                    <input
                        className='login-input'
                        name='username'
                        type='username' placeholder="username..." /><br />

                    <input className='login-input'
                        name="password"
                        type='password' placeholder="password..." /><br />

                    <input className='login-input'
                        name='email'
                        type='email'
                        placeholder="email..." /><br />

                    <input
                        className='login-btn'
                        type='submit'
                        placeholder="email..." />
                </form>
            </div>
        </div>
    )
}

export default Register;