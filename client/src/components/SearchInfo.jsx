const SearchInfo = ({ ingredients, setSearchTerm, searchTerm }) => {


    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    // console.log('searchTerm:', searchTerm)
    // console.log('ingredients:', ingredients.ingredients)


    return (
        <div>
            <form onChange={handleSearch}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search any alcohol or ingredient..."
                />

            </form>

            <div className="info-sesh">

                <h2>{ingredients?.ingredients[0]?.strIngredient}</h2>
                <h4>Approximate ABV: {ingredients?.ingredients[0]?.strABV}</h4>
                {ingredients?.ingredients[0]?.strDescription}
            </div>



        </div>

    )
}

export default SearchInfo;