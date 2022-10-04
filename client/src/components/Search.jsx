import { useEffect } from "react"
import DrinkCard from "./DrinkCard"
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../redux/user'

const Search = ({ setSearchTerm, drinks, favoritesList, addToFavorites, deleteFavorite }) => {

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

    return (
        <div>
            <form
                onChange={handleSearch}
            >
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search by keyword..."
                />

            </form>

            <div>
                {
                    drinks.map((drink) => {

                        return (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                                favoritesList={favoritesList}
                                addToFavorites={addToFavorites}
                                deleteFavorite={deleteFavorite}
                            />
                        )
                    })
                }

            </div>
        </div >
    )
}

export default Search;