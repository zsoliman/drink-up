const Register = () => {

    const handleUserName = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div >
            <h1>Sign up</h1>
            <div >
                <form >
                    <input onSubmit={handleUserName} type='text'
                        placeholder="username..."
                    /><br />

                    <input placeholder="password..." /><br />

                    <input placeholder="email..." /><br />

                    <input type='submit' placeholder="email..." />
                </form>
            </div>
        </div>
    )
}

export default Register;