import { useEffect } from "react"
const SearchInfo = ({ ingredients, setSearchTerm }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    // console.log('searchTerm:', searchTerm)
    console.log('ingredients:', ingredients)

    if (!ingredients) return <h1>loading</h1>

    return (
        <div style={{ backgroundColor: '#000', height: '100vh' }}>
            <h2 className="header">Learn more here:</h2>
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