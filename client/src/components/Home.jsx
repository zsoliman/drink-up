import barman from '../media/barman.mp4';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>

            <video
                className='Video'
                autoPlay
                loop
                muted
            >
                <source src={barman} type='video/mp4' />
            </video>

            <div className="home-screen-div">
                <Link to='/drinks'>
                    <button className="home-link">Thirsty? <br /><br /> Get A Suggestion</button>
                </Link>

                <Link to='/search'>
                    <button className="home-link">Thirsty but Picky? <br /><br /> Search any drink!</button>
                </Link>

                <Link to='/searchinfo'>
                    <button className="home-link">Curious about your alcohol of choice? <br /><br /> Read about it</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;