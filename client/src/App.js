import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import DrinkSuggestion from './components/DrinkSuggestion';
import SearchInfo from './components/SearchInfo';
import Nav from './components/Nav';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Register from './components/Register';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from './redux/user'
function App() {

  const [suggestedDrinks, setSuggestedDrinks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [drinks, setDrinks] = useState('')
  const user = useSelector((state) => state.user.value)
  // utilizing the state, import this into any component that needs the state
  const dispatch = useDispatch();
  // dispatch is to update or change the state

  const [favoritesList, setFavoritesList] = useState([])

  const getFavorites = async () => {
    let req = await fetch(`http://localhost:3000/users/${user.id}/favorites`)
    let res = await req.json()
    setFavoritesList([...res])
  }

  const addToFavorites = async (newRecipe) => {
    let req = await fetch(`http://localhost:3000/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        user_id: user.id,
        recipe_id: newRecipe.id
      })
    })
    let res = await req.json()
    console.log('Posted to server:', res)
    getFavorites()
  };

  const deleteFavorite = async (drink) => {
    let req = await fetch(`http://localhost:3000/favorites/${user.id}/${drink.id}`, {
      method: 'DELETE'
    })
    console.log('Unfavorited')
    document.getElementById(drink.strDrink).remove()
  }



  // useEffect(() => {

  // }, [])



  // 'options' provided by[]
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a35a002151msh41ddaae5f070447p1e6af5jsn72373cb3b420',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  const getSuggestedDrinks = async () => {
    let req = await fetch('https://the-cocktail-db.p.rapidapi.com/random.php', options)
    let res = await req.json()
    setSuggestedDrinks(res.drinks)
  }

  // searches ingredients for SearchInfo.jsx
  const searchIngredients = async () => {
    let req = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${searchTerm}`, options)
    let res = await req.json()
    // if statement stops the error when search is invalid
    if (res.ingredients !== null) {
      setIngredients(res.ingredients)
    }

  }

  // searches drink recipes for Search.jsx
  const searchDrinks = async () => {
    let req = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchTerm}`, options)
    let res = await req.json()
    // if statement stops the error when search is invalid
    if (res.drinks !== null) {
      setDrinks(res.drinks)
    }
  }

  // this fetches the user from the cookies if the page refreshes, so that the user stays logged in
  const fetchSession = async () => {
    let req = await fetch('/me')
    let res = await req.json()
    dispatch(setValue(res))
  }

  useEffect(() => {
    getSuggestedDrinks();
    searchIngredients();
    searchDrinks();
  }, [searchTerm])

  useEffect(() => {
    fetchSession();
    // if (user) {
    //   getFavorites()
    // } else { setFavoritesList([]) }
  }, [])

  useEffect(() => {
    getFavorites();
  }, [user])


  // Nav needs to be inside BrowserRouter but outside Routes because...
  return (
    <div className="App">
      <BrowserRouter>

        <Nav
        />

        <Routes>
          <Route exact path='/'
            element={<Home />} ></Route>

          <Route path='/drinks'
            element={<DrinkSuggestion
              suggestedDrinks={suggestedDrinks}
              favoritesList={favoritesList}
              addToFavorites={addToFavorites}
              deleteFavorite={deleteFavorite}
            />} ></Route>

          <Route path='/searchinfo'
            element={<SearchInfo
              ingredients={ingredients}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />} ></Route>

          <Route path='/search'
            element={<Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              drinks={drinks}
              favoritesList={favoritesList}
              addToFavorites={addToFavorites}
              deleteFavorite={deleteFavorite}
            />} ></Route>

          <Route path='/login'
            element={<Login
            />} ></Route>

          <Route path='/favorites'
            element={<Favorites
              favoritesList={favoritesList}
              addToFavorites={addToFavorites}
              deleteFavorite={deleteFavorite}
            />} ></Route>

          <Route path='/register'
            element={<Register />} ></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
