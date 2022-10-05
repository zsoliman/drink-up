import { useState } from "react"
import { useEffect } from "react"
import DrinkCard from "./DrinkCard"
import { useSelector } from 'react-redux'


const Favorites = ({ favoritesList, addToFavorites, deleteFavorite }) => {
    const user = useSelector((state) => state.user.value)

    console.log(favoritesList)

    return (
        <div>
            <h2>Favorites Page</h2>
            <div className="card-container">
                {
                    favoritesList.map((drink) => {
                        return (

                            <DrinkCard
                                favoritesList={favoritesList}
                                key={drink.id}
                                drink={drink.recipe}
                                addToFavorites={addToFavorites}
                                deleteFavorite={deleteFavorite}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Favorites;