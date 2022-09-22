import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>

            <div>
                <Link to='/drinks'>
                    <button className="btn">Thirsty? <br /> Get A Suggestion</button>
                </Link>

                <Link to='/search'>
                    <button className="btn">Thirsty but Picky? <br /> Search by Ingredient</button>
                </Link>

                <Link to='/searchinfo'>
                    <button className="btn">Curious about your alcohol of choice? <br /> Read about it</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;