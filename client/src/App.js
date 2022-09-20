import './App.css';
import Home from './components/Home';
import Drinks from './components/Drinks';
import Search from './components/Search';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import FoodCard from './components/FoodCard';

function App() {

  // const [foods, setFoods] = useState([])



  // const optionsFood = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'a35a002151msh41ddaae5f070447p1e6af5jsn72373cb3b420',
  //     'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
  //   }
  // };

  // getFoods()

  // const getFoods = async () => {
  //   let req = await fetch('https://themealdb.p.rapidapi.com/filter.php?i=chicken_breast%2Cgarlic', optionsFood)
  //   let res = await req.json()
  //   setFoods(res.meals)
  // }
  // console.log('foods:', foods)



  return (
    <div className="App">
      <BrowserRouter>
        {/* Nav needs to be inside BrowserRouter but outside Routes */}
        <Nav />

        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route path='/drinks' element={<Drinks />} ></Route>
          <Route path='/search' element={<Search />} ></Route>

        </Routes>
      </BrowserRouter>


      {/* {
        foods.map((food) => {
          return (
            <FoodCard food={food} />
          )
        })
      } */}
    </div>
  );
}

export default App;
