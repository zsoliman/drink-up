const Search = ({ drinks, setSearchTerm, searchTerm }) => {


    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    console.log(searchTerm)


    return (
        <div>
            <form onChange={handleSearch}>
                <input type="text" placeholder="Search here..." />
                <input type="submit" value="Submit" />
            </form>



        </div>

    )
}

export default Search;