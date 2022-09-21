import DrinkCard from "./DrinkCard";

const DrinkSuggestion = ({ suggestedDrinks }) => {

    return (
        <div>
            {
                suggestedDrinks.map((drink) => {

                    return (
                        <DrinkCard
                            key={drink.idDrink}
                            drink={drink}
                        />

                    )
                })
            }

        </div>
    )
}

export default DrinkSuggestion;