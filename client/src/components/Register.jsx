const Register = () => {

    const handleUserName = (e) => {
        e.preventDefault()
        console.log(e.target.username.value)
        console.log(e.target.password.value)
        console.log(e.target.email.value)
    }

    return (
        <div >
            <h1>Sign up</h1>
            <div >
                <form onSubmit={handleUserName}>
                    <input type='text' name='username' placeholder="username..."
                    /><br />

                    <input name="password" placeholder="password..." /><br />

                    <input name='email' placeholder="email..." /><br />

                    <input type='submit' placeholder="email..." />
                </form>
            </div>
        </div>
    )
}

export default Register;