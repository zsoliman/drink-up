import { useEffect } from "react"
import backgroundLights from '../media/backgroundLights.mp4'
import Footer from "./Footer"

const SearchInfo = ({ ingredients, setSearchTerm }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    // console.log('searchTerm:', searchTerm)
    console.log('ingredients:', ingredients)

    if (!ingredients) return <h1>loading</h1>

    return (
        <div>
            <video
                className='Video'
                autoPlay
                loop
                muted

            >
                <source src={backgroundLights} type='video/mp4' />
            </video>

            <h2 className="header">Learn more here:</h2>
            <form onChange={handleSearch}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search any alcohol or ingredient..."
                />

            </form>

            <div className="info-sesh">

                <h2>{ingredients[0].strIngredient}</h2>

                <h4>Approximate ABV: {ingredients[0].strABV}</h4>

                {ingredients[0].strDescription}
            </div>


            <Footer />


        </div>

    )
}

export default SearchInfo;