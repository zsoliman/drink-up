import { useState } from "react"
import { useEffect } from "react"
import DrinkCard from "./DrinkCard"
import { useSelector } from 'react-redux'
import wine from '../media/wine.jpg'
import beer from '../media/beer.jpg'
import backgroundLights from '../media/backgroundLights.mp4'
import Footer from "./Footer"


const Favorites = ({ favoritesList, addToFavorites, deleteFavorite }) => {
    const user = useSelector((state) => state.user.value)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (favoritesList != []) {

        return (


            <div
            // style={{ backgroundColor: '#161616' }}
            >
                <video
                    className='Video'
                    autoPlay
                    loop
                    muted

                >
                    <source src={backgroundLights} type='video/mp4' />
                </video>

                <h2 className="header">Your Favorites:</h2>
                <div className="card-container">
                    {

                        favoritesList.map((drink) => {
                            return (

                                <DrinkCard
                                    favoritesList={favoritesList}
                                    key={drink.id}
                                    drink={drink.recipe}
                                    addToFavorites={addToFavorites}
                                    deleteFavorite={deleteFavorite}
                                />
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        )
    } else {
        return <h1 style={{ marginTop: '50vh' }}>No favorites yet!</h1>
    }
}
export default Favorites;

