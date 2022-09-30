import { useEffect } from "react"
import DrinkCard from "./DrinkCard"

const Search = ({ setSearchTerm, drinks, currentUser, setCurrentUser }) => {

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const fetchSession = async () => {
        let req = await fetch('/me')
        let res = await req.json()
        setCurrentUser(res)
    }

    useEffect(() => {
        fetchSession()
    }, [currentUser])

    console.log('Drinks', drinks)

    return (
        <div>
            <form
                onChange={handleSearch}
            >
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search by keyword..."
                />

            </form>

            <div>
                {
                    drinks.map((drink) => {

                        return (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                                currentUser={currentUser}
                            />
                        )
                    })
                }

            </div>
        </div >
    )
}

export default Search;