import DrinkCard from "./DrinkCard";

const DrinkSuggestion = ({ suggestedDrinks, favoritesList, addToFavorites, deleteFavorite }) => {

    return (
        <div style={{ backgroundColor: '#000000', height: '100vh' }}>
            <h2 style={{ marginTop: '0', paddingTop: '20px' }}>Suggested Drinks</h2>
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