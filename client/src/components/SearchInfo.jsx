const SearchInfo = ({ ingredients, setSearchTerm }) => {


    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    // console.log('searchTerm:', searchTerm)
    console.log('ingredients:', ingredients)


    return (
        <div style={{ backgroundColor: '#000', height: '100vh' }}>
            <form onChange={handleSearch}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search any alcohol or ingredient..."
                />

            </form>

            <div className="info-sesh">

                <h2>{ingredients[0].strIngredient}</h2>

                <h4>Approximate ABV: {ingredients[0].strABV}</h4>

                {ingredients[0].strDescription}
            </div>





        </div>

    )
}

export default SearchInfo;