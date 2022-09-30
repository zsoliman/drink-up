import { useState } from "react"
import { useEffect } from "react"
import DrinkCard from "./DrinkCard"

const Favorites = ({ currentUser }) => {

    const [favoritesList, setFavoritesList] = useState([])

    const getFavorites = async () => {
        let req = await fetch(`http://localhost:3000/users/${currentUser.id}/favorites`)
        let res = await req.json()
        setFavoritesList(res)
    }

    // console.log('FL', favoritesList)
    // console.log('user', currentUser)


    useEffect(() => {
        if (currentUser.id) {
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
                            key={drink.id}
                            drink={drink.recipe}
                            currentUser={currentUser}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites;