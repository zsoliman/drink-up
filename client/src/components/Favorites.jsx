import { useState } from "react"
import { useEffect } from "react"
import DrinkCard from "./DrinkCard"

const Favorites = () => {

    const [favoritesList, setFavoritesList] = useState([])

    let user_id = 1
    //until log in is set up, so that the fetch works

    const getFavorites = async () => {
        let req = await fetch(`http://localhost:3000/users/${user_id}/favorites`)
        let res = await req.json()
        console.log(res)
        setFavoritesList(res)
    }


    useEffect(() => {
        getFavorites()
    }, [])

    console.log('fav list', favoritesList.recipe)
    return (
        <div>
            <h2>Favorites Page</h2>

            {
                favoritesList.map((drink) => {
                    return (
                        <DrinkCard drink={drink} />
                    )
                })
            }
        </div>
    )
}

export default Favorites;