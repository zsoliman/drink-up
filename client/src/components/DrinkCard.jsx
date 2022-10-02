import { useState } from "react";
import { useSelector } from 'react-redux'

const DrinkCard = ({ drink }) => {
    const user = useSelector((state) => state.user.value)

    console.log('drink', drink)
    // console.log(' Drink Card user:', user)


    const [isFavorite, setIsFavorite] = useState(false);
    // const [newDrink, setNewDrink] = useState({});

    const addToRecipes = async () => {
        let req = await fetch(`http://localhost:3000/recipes/${user.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                apiID: drink.idDrink,
                strDrink: drink.strDrink,
                strDrinkThumb: drink.strDrinkThumb,
                strIngredient1: drink.strIngredient1,
                strIngredient2: drink.strIngredient2,
                strIngredient3: drink.strIngredient3,
                strIngredient4: drink.strIngredient4,
                strIngredient5: drink.strIngredient5,
                strIngredient6: drink.strIngredient6,
                strIngredient7: drink.strIngredient7,
                strIngredient8: drink.strIngredient8,
                strIngredient9: drink.strIngredient9,
                strIngredient10: drink.strIngredient10,
                strIngredient11: drink.strIngredient11,
                strIngredient12: drink.strIngredient12,
                strIngredient13: drink.strIngredient13,
                strIngredient14: drink.strIngredient14,
                strIngredient15: drink.strIngredient15,
                strInstructions: drink.strInstructions,
                strMeasure1: drink.strMeasure1,
                strMeasure2: drink.strMeasure2,
                strMeasure3: drink.strMeasure3,
                strMeasure4: drink.strMeasure4,
                strMeasure5: drink.strMeasure5,
                strMeasure6: drink.strMeasure6,
                strMeasure7: drink.strMeasure7,
                strMeasure8: drink.strMeasure8,
                strMeasure9: drink.strMeasure9,
                strMeasure10: drink.strMeasure10,
                strMeasure11: drink.strMeasure11,
                strMeasure12: drink.strMeasure12,
                strMeasure13: drink.strMeasure13,
                strMeasure14: drink.strMeasure14,
                strMeasure15: drink.strMeasure15
            })
        })
        let res = await req.json()
        // setNewDrink(res)
        console.log("res", res)
        return res
        // if (res) {
        //     console.log('Posted to server:', res)
        // } else {
        //     console.log('Error', res)
        // }
    }




    // console.log('NEW:', newDrink)

    const addToFavorites = async (newRecipe) => {
        let req = await fetch(`http://localhost:3000/favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                recipe_id: newRecipe.id

            })
        })
        // let res = await req.json()
        // console.log(res)
        // console.log(newDrink.id)
        // if (res) {
        // console.log('Posted to server:', res)
        // } else {
        // console.log('Error', res)
        // }
    };



    const handleClick = async () => {
        addToFavorites(await addToRecipes())
        console.log("new recipe:", await addToRecipes())
        setIsFavorite(current => !current);
    }

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


                <button className={isFavorite ? 'fav' : ''} onClick={handleClick}>fav</button>
            </div>

            <img src={drink.strDrinkThumb} alt='A nice drink with no image' className="drink-img" />

        </div>

    )
}

export default DrinkCard;