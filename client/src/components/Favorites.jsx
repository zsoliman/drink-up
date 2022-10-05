import { useState } from "react"
import { useEffect } from "react"
import DrinkCard from "./DrinkCard"
import { useSelector } from 'react-redux'


const Favorites = ({ favoritesList, addToFavorites, deleteFavorite }) => {
    const user = useSelector((state) => state.user.value)

    console.log(favoritesList)

    if (favoritesList != []) {

        return (


            <div style={{ backgroundColor: '#000000' }}>
                <h2 style={{ marginTop: '0', paddingTop: '20px' }}>Favorites Page</h2>
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
    } else {
        return <h1 style={{ marginTop: '50vh' }}>No favorites yet!</h1>
    }
}
export default Favorites;

