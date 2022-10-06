import DrinkCard from "./DrinkCard";
import { useEffect } from "react";
import backgroundLights from '../media/backgroundLights.mp4'
import Footer from "./Footer";


const DrinkSuggestion = ({ suggestedDrinks, favoritesList, addToFavorites, deleteFavorite, fetchSession }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div >
            <video
                className='Video'
                autoPlay
                loop
                muted

            >
                <source src={backgroundLights} type='video/mp4' />
            </video>
            <h2 className="header">Drink Up these Signature Cocktails</h2>
            <div className="card-container">
                {
                    suggestedDrinks.map((drink) => {

                        return (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                                favoritesList={favoritesList}
                                addToFavorites={addToFavorites}
                                deleteFavorite={deleteFavorite}
                                fetchSession={fetchSession}

                            />

                        )
                    })
                }

            </div>
            <Footer />
        </div>
    )
}

export default DrinkSuggestion;