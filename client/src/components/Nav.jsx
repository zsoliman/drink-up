import { Link, useNavigate } from "react-router-dom";

const Nav = ({ currentUser, setCurrentUser }) => {

    // const navigate = useNavigate()

    const handleLogout = () => {
        fetch('/logout', { method: 'DELETE' })
        setCurrentUser({})
        window.location.reload();
        // navigate('/')
    }

    return (
        <div className="nav">
            {currentUser ?
                <Link className="link" to='favorites'>
                    <h3 style={{ margin: '0' }}>Favorites</h3>
                </Link>

                :

                <Link className="link" to='register'>
                    <h3 style={{ margin: '0' }}>Sign Up</h3>
                </Link>
            }

            <h3 className="logo">Drink<Link to='/'>
                <img className="logo" src="https://img.icons8.com/pastel-glyph/344/cocktail--v2.png" />
            </Link>Up!</h3>


            <div>
                {currentUser ?
                    <h3
                        className="link"
                        onClick={handleLogout}>
                        {currentUser.user_name}
                        <br />Log Out</h3>

                    :

                    <Link className="link" to='login'>
                        <h3 className="link" style={{ margin: '0' }}>Log In</h3>
                    </Link>
                }
            </div>


        </div>
    )
}

export default Nav; 