import barman from '../media/barman.mp4';
import strawberryLemonade from '../media/strawberryLemonade.jpg';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div >
            <div className='home-component'>
                <video
                    className='Video'
                    autoPlay
                    loop
                    muted
                >
                    <source src={barman} type='video/mp4' />
                </video>

                <h1 className='title'>Drink Up!</h1>
            </div>
            <div className="home-screen-div">

                <Link
                    className="home-link"
                    to='/drinks'>

                    <img className='home-link-img' src={strawberryLemonade} />

                    Thirsty? <br /><br /> Get A Suggestion</Link>



                <Link to='/search' className="home-link">
                    Thirsty but Picky? <br /><br /> Search any drink!
                </Link>

                <Link to='/searchinfo' className="home-link">
                    Curious about your alcohol of choice? <br /><br /> Read about it
                </Link>
            </div>
        </div>
    )
}

export default Home;