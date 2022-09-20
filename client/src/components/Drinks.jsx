import DrinkCard from "./DrinkCard";
import { useState, useEffect } from 'react';


const Drinks = () => {

    const [drinks, setDrinks] = useState([])

    // 'options' provided by api
    const optionsDrinks = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a35a002151msh41ddaae5f070447p1e6af5jsn72373cb3b420',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };

    const getDrinks = async () => {
        let req = await fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=whiskey_sour', optionsDrinks)
        let res = await req.json()
        setDrinks(res.drinks)
    }

    console.log('drinks:', drinks)

    useEffect(() => {
        getDrinks()
    }, [])

    return (
        <div>
            {
                drinks.map((drink) => {

                    return (
                        <DrinkCard drink={drink} />
                    )
                })
            }
        </div>
    )
}

export default Drinks;