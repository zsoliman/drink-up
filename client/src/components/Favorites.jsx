import { useState } from "react"
import { useEffect } from "react"
import DrinkCard from "./DrinkCard"
import { useSelector } from 'react-redux'


const Favorites = ({ favoritesList, addToFavorites }) => {
    const user = useSelector((state) => state.user.value)

    console.log(favoritesList)

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
                            addToFavorites={addToFavorites}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites;