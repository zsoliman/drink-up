import drinkupnav from '../media/drinkupnav.PNG'
const Footer = () => {
    return (
        <div className="Footer">
            <p> | </p>
            <p> Home </p>
            <p> | </p>
            <p> Services </p>
            <p> | </p>
            <p  > Drink Up! inc. ™ </p>
            <p> | </p>
            <img src={drinkupnav} style={{ height: '100px' }} />
            <p> | </p>
            <p> Zachary Soliman  ⓒ  2022 </p>
            <p> | </p>
            <p> Contact </p>
            <p> | </p>
            <p> Careers </p>
            <p> | </p>


        </div>
    )
}

export default Footer;