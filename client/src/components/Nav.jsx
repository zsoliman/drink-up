import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <h3>Favorites</h3>
            <h3 className="logo">Drink<Link to='/'>
                <img className="logo" src="https://img.icons8.com/pastel-glyph/344/cocktail--v2.png" />
            </Link>Up!</h3>
            <h3>Log In</h3>
        </div>
    )
}

export default Nav; 