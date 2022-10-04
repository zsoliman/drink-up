import DrinkCard from "./DrinkCard";

const DrinkSuggestion = ({ suggestedDrinks, favoritesList, addToFavorites }) => {

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
                        />

                    )
                })
            }

        </div>
    )
}

export default DrinkSuggestion;