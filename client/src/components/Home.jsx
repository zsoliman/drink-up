import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Drink Up</h1>
            <div>
                <Link to='/drinks'>
                    <button>Thirsty? <br /> Get A Suggestion</button>
                </Link>

                <Link to='/searchinfo'>
                    <button>Curious about your alcohol of choice? <br /> Read about it</button>
                </Link>

                <button>Thirsty but Picky? <br /> Search by Ingredient</button>
            </div>
        </div>
    )
}

export default Home;