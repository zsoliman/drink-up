import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <h3>Favorites</h3>

            <Link to='/'>
                <h2>LOGO</h2>
            </Link>

            <h3>Log In</h3>
        </div>
    )
}

export default Nav; 