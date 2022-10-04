import DrinkCard from "./DrinkCard";

const DrinkSuggestion = ({ suggestedDrinks, favoritesList, addToFavorites, deleteFavorite }) => {

    return (
        <div>
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
    )
}

export default DrinkSuggestion;