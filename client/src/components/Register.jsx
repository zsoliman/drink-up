const Register = () => {

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
    }

    const submitNewUser = (e) => {
        e.preventDefault()
        postNewUser(e)
        // console.log(e.target.username.value)
        // console.log(e.target.password.value)
        // console.log(e.target.email.value)
    }

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