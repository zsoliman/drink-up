import { useState } from "react"
import { useEffect } from "react"
import DrinkCard from "./DrinkCard"
import { useSelector } from 'react-redux'


const Favorites = () => {
    const user = useSelector((state) => state.user.value)

    // console.log('favorites CU', user)

    const [favoritesList, setFavoritesList] = useState([])

    const getFavorites = async () => {
        let req = await fetch(`http://localhost:3000/users/${user.id}/favorites`)
        let res = await req.json()
        setFavoritesList(res)
    }


    useEffect(() => {
        if (user.id) {
            getFavorites()
        }
    }, [])

    return (
        <div>
            <h2>Favorites Page</h2>

            {
                favoritesList.map((drink) => {
                    return (
                        <DrinkCard
                            favoritesList={favoritesList}
                            key={drink.id}
                            drink={drink.recipe}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites;