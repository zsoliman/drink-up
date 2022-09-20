import DrinkCard from "./DrinkCard";

const Drinks = ({ randomDrinks }) => {

    return (
        <div>
            {
                randomDrinks.map((drink) => {

                    return (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    )
                })
            }

        </div>
    )
}

export default Drinks;