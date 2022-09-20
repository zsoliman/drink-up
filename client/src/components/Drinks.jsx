import DrinkCard from "./DrinkCard";

const Drinks = ({ drinks }) => {

    return (
        <div>
            {
                drinks.map((drink) => {

                    return (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    )
                })
            }

        </div>
    )
}

export default Drinks;