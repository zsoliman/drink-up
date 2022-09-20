import './App.css';
import Home from './components/Home';
import Drinks from './components/Drinks';
import Search from './components/Search';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [randomDrinks, setRandomDrinks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  // 'options' provided by api
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a35a002151msh41ddaae5f070447p1e6af5jsn72373cb3b420',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  const getDrinks = async () => {
    let req = await fetch(`https://the-cocktail-db.p.rapidapi.com/random.php`, options)
    let res = await req.json()
    setRandomDrinks(res.drinks)
  }

  // console.log('drinks:', drinks)

  useEffect(() => {
    getDrinks()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>

        {/* Nav needs to be inside BrowserRouter but outside Routes */}
        <Nav />

        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route path='/drinks' element={<Drinks randomDrinks={randomDrinks} />} ></Route>
          <Route path='/search' element={<Search
            // drinks={drinks}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />} ></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
