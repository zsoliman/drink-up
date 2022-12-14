import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from 'react-redux'

const DrinkCard = ({ drink, favoritesList, addToFavorites, deleteFavorite, fetchSession }) => {
    const user = useSelector((state) => state.user.value)

    // console.log('drink', drink)
    // console.log(' Drink Card user:', user)
    // console.log('fav list:', favoritesList)
    // console.log('user:', user)

    // mapping through the list of favorites, checking to see if the drink in the card is on the list of favorites to change state and update button color

    const [isFavorite, setIsFavorite] = useState(false);

    const favoriteSetter = () => {
        favoritesList.map((fav) => {
            // console.log('fav', fav)
            // console.log('drink', drink.strDrink)
            if (drink.strDrink === fav.recipe.strDrink) {
                setIsFavorite(true)
                // console.log('if', isFavorite)
            }
            else {
                // console.log('else', isFavorite)
            }
        })
    }

    useEffect(() => {
        favoriteSetter()
    }, [])



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
                strMeasure15: drink.strMeasure15,
                strInstructions: drink.strInstructions
            })
        })
        let res = await req.json()
        console.log('addtoRecipes', res)
        return res
    }

    const handleClick = async () => {
        // fetchSession()

        console.log('start')
        console.log(user)
        console.log("user.favorites is", user.favorites)

        // const isFound = user.favorites
        // .some(el => {
        // console.log('el', el, 'drink', drink)
        // return el.recipe.id === drink.id
        // if (el.id === drink.id) {
        // return true
        // }
        // })

        const checkFav = user.favorites.find((fav) => {
            return fav.recipe.id === drink.id
        })

        console.log("checkFav is", checkFav)

        if (checkFav) {
            console.log('drink found, deleting favorites')
            deleteFavorite(drink)
        } else {
            console.log('drink not found, adding to favorites')
            addToFavorites(await addToRecipes())
        }
        fetchSession()
        setIsFavorite(current => !current);
    }

    return (
        <div className="card-border">
            <h1>{drink.strDrink}</h1>
            <div className="card" id={drink.strDrink}>
                <div className="card__side card__side--front-1">

                    <img src={drink.strDrinkThumb} alt='A nice drink with no image' className="drink-img" />
                </div>

                <div className="card__side card__side--back card__side--back-1">
                    <div className="card-info">
                        <h2>What you'll need:</h2>
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
                        <h2>Instructions:</h2>
                        <p>{drink.strInstructions}</p>
                        {/* <p>Tags: {drink.strTags}</p> */}
                    </div>
                    {user ?

                        <button className={isFavorite ? 'fav' : 'unfav'} onClick={handleClick}>Like</button>
                        :
                        ''
                    }
                </div>


            </div>
        </div >
    )
}

export default DrinkCard;