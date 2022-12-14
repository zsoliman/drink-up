import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../redux/user'
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

    // window.onscroll = function () { scrollFunction() };

    const scrollFunction = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("nav").style.padding = "30px 10px";
            // document.getElementById("logo").style.fontSize = "25px";
        } else {
            document.getElementById("nav").style.padding = "80px 10px";
            // document.getElementById("logo").style.fontSize = "35px";
        }
    }

    // scrollFunction()

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
                        className="link-username">
                        {user.user_name}
                        <Link className="link" to='/' onClick={handleLogout}>
                            <br />Log Out
                        </Link>
                    </h3>

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