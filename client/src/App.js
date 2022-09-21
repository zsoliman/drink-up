import './App.css';
import Home from './components/Home';
import DrinkSuggestion from './components/DrinkSuggestion';
import SearchInfo from './components/SearchInfo';
import Nav from './components/Nav';
import Search from './components/Search';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [randomDrinks, setRandomDrinks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [drinks, setDrinks] = useState('')


  // 'options' provided by api
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a35a002151msh41ddaae5f070447p1e6af5jsn72373cb3b420',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  const getRandomDrinks = async () => {
    let req = await fetch('https://the-cocktail-db.p.rapidapi.com/random.php', options)
    let res = await req.json()
    setRandomDrinks(res.drinks)
  }

  const searchIngredients = async () => {
    let req = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${searchTerm}`, options)
    let res = await req.json()
    setIngredients(res)
  }

  const searchDrinks = async () => {
    let req = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchTerm}`, options)
    let res = await req.json()
    setDrinks(res.drinks)
  }

  // console.log('drinks', drinks.drinks)

  useEffect(() => {
    getRandomDrinks();
    searchIngredients();
    searchDrinks();
  }, [searchTerm])

  return (
    <div className="App">
      <BrowserRouter>

        {/* Nav needs to be inside BrowserRouter but outside Routes because...*/}
        <Nav />

        <Routes>
          <Route exact path='/'
            element={<Home />} ></Route>

          <Route path='/drinks'
            element={<DrinkSuggestion
              randomDrinks={randomDrinks} />} ></Route>

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
            />} ></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
