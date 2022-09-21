import DrinkCard from "./DrinkCard"

const Search = ({ setSearchTerm, drinks }) => {

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    console.log('sDrinks', drinks)

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
                            />
                        )
                    })
                }

            </div>
        </div >
    )
}

export default Search;