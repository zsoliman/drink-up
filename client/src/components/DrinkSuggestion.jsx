import DrinkCard from "./DrinkCard";
import { useEffect } from "react";

const DrinkSuggestion = ({ suggestedDrinks, favoritesList, addToFavorites, deleteFavorite }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{ backgroundColor: '#161616', height: '100vh' }}>
            <h2 className="header">Suggested Drinks</h2>
            <div className="card-container">
                {
                    suggestedDrinks.map((drink) => {

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
        </div>
    )
}

export default DrinkSuggestion;