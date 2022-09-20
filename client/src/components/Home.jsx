import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Drink Up</h1>
            <div>
                <Link to='/drinks'>
                    <button>Get A Suggestion</button>
                </Link>

                <Link to='/search'>
                    <button>Search by Ingredient</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;