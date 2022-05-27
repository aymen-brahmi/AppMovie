import './App.css';
import Add from './Components/Add';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import {movies} from './Components/movies';
import {useState} from 'react';
function App() {
  const [movieList,setmovieList]=useState(movies)
  return (
    <div className="App">
      <NavBar/>
      <Filter/>
      <Add/>
      <MovieList movieList={movieList} />
      
    </div>
  );
}

export default App;
