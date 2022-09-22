const DrinkCard = ({ drink }) => {

    return (
        <div className="drink-card">
            <div>
                <h2>{drink.strDrink}</h2>
                <p>{drink.strMeasure1} {drink.strIngredient1}</p>
                <p>{drink.strMeasure2} {drink.strIngredient2}</p>
                <p>{drink.strMeasure3} {drink.strIngredient3}</p>
                <p>{drink.strMeasure4} {drink.strIngredient4}</p>
                <p>{drink.strMeasure5} {drink.strIngredient5}</p>
                <p>{drink.strMeasure6} {drink.strIngredient6}</p>
                <p>{drink.strMeasure7} {drink.strIngredient7}</p>
                <p>{drink.strMeasure8} {drink.strIngredient8}</p>
                <p>{drink.strMeasure9} {drink.strIngredient9}</p>
                <p>{drink.strMeasure10} {drink.strIngredient10}</p>
                <p>{drink.strMeasure11} {drink.strIngredient11}</p>
                <p>{drink.strMeasure12} {drink.strIngredient12}</p>
                <p>{drink.strMeasure13} {drink.strIngredient13}</p>
                <p>{drink.strMeasure14} {drink.strIngredient14}</p>
                <p>{drink.strMeasure15} {drink.strIngredient15}</p>
                <p>Instructions: {drink.strInstructions}</p>
                <p>Tags: {drink.strTags}</p>
            </div>

            <img src={drink.strDrinkThumb} alt='A nice drink' className="drink-img" />

        </div>

    )
}

export default DrinkCard;