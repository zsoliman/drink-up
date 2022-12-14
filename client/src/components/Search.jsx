import { useEffect } from "react"
import DrinkCard from "./DrinkCard"
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../redux/user'
import backgroundLights from '../media/backgroundLights.mp4'
import Footer from "./Footer"


const Search = ({ setSearchTerm, drinks, favoritesList, addToFavorites, deleteFavorite }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch();

    // console.log('search current user', user)

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const fetchSession = async () => {
        let req = await fetch('/me')
        let res = await req.json()
        dispatch(setValue(res))
    }

    useEffect(() => {
        fetchSession()
    }, [])

    console.log('Drinks', drinks)

    if (!drinks) return <h1>loading</h1>

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

            <h2 className="header">Find Your Drink:</h2>
            <form
                onChange={handleSearch}
            >
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search by keyword..."
                />

            </form>

            <div className="card-container">
                {
                    drinks.map((drink) => {

                        return (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                                favoritesList={favoritesList}
                                addToFavorites={addToFavorites}
                                deleteFavorite={deleteFavorite}
                                fetchSession={fetchSession}
                            />
                        )
                    })
                }

            </div>
            <Footer />
        </div >
    )
}

export default Search;