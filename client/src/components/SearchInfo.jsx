const SearchInfo = ({ ingredients, setSearchTerm }) => {


    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    // console.log('searchTerm:', searchTerm)
    console.log('ingredients:', ingredients)

    if (!ingredients) return <h1>loading</h1>

    return (
        <div style={{ backgroundColor: '#000', height: '100vh' }}>
            <form style={{ marginTop: '10em' }} onChange={handleSearch}>
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