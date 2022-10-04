import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../redux/user'
import drinkuplogo from '../media/drinkuplogo.PNG'
import drinkupnav from '../media/drinkupnav.PNG'

const Nav = () => {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch();

    const handleLogout = () => {
        fetch('/logout', { method: 'DELETE' })
        // setCurrentUser({})
        dispatch(setValue({}))
        window.location.reload();
    }

    return (
        <div className="nav">
            {user ?
                <Link className="link" to='favorites'>
                    <h3 style={{ margin: '0' }}>Favorites</h3>
                </Link>

                :

                <Link className="link" to='register'>
                    <h3 style={{ margin: '0' }}>Sign Up</h3>
                </Link>
            }

            <h3 className="logo"><Link to='/'>
                <img className="logo" src={drinkupnav}
                // "https://img.icons8.com/pastel-glyph/344/cocktail--v2.png"
                />
            </Link></h3>


            <div>
                {user ?
                    <h3
                        className="link"
                        onClick={handleLogout}>
                        {user.user_name}
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