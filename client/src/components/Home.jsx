import barman from '../media/barman.mp4';
import arrow from '../media/arrow.png';
import strawberryLemonade from '../media/strawberryLemonade.jpg';
import lemonade from '../media/lemonade.jpg';
import mojito from '../media/mojito.jpg';
import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';

const Home = () => {

    const arrowRef = useRef()
    const handleArrowClick = () => {
        arrowRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            console.log('window.scrollY', window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <img onClick={handleArrowClick} className='home-arrow' src={arrow} />
            </div>
            <div ref={arrowRef} className="home-screen-div">

                <Link
                    className="home-link"
                    to='/drinks'>

                    <img className='home-link-img'
                        src={strawberryLemonade} />

                    Thirsty? <br /><br /> Get A Suggestion</Link>



                <Link to='/search'
                    className="home-link">
                    <img className='home-link-img'
                        src={lemonade} />

                    Thirsty but Picky? <br /><br /> Search any drink!
                </Link>

                <Link to='/searchinfo' className="home-link">
                    <img className='home-link-img'
                        src={mojito} />

                    Curious about your alcohol of choice? <br /><br /> Read about it
                </Link>
            </div>
        </div>
    )
}

export default Home;