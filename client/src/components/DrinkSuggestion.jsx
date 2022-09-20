import DrinkCard from "./DrinkCard";

const DrinkSuggestion = ({ randomDrinks }) => {

    return (
        <div>
            {
                randomDrinks.map((drink) => {

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