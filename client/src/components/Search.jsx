import { useState } from "react";

const Search = ({ drinks }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }


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