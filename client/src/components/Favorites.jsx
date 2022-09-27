import { useEffect } from "react"

const Favorites = () => {

    let user_id = 1
    //until log in is set up, so that the fetch works

    const getFavorites = async () => {
        let req = await fetch(`http://localhost:3000/users/${user_id}/favorites`)
        let res = await req.json()
        console.log('res:', res)
    }

    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <h2>Favorites Page</h2>
    )
}

export default Favorites;