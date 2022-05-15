
import './css/App.css';
import './components/SearchBar'
import { SearchBar } from './components/SearchBar';
import { API_KEY } from './settings'; 
import axios from 'axios';

function App() {
  const callWeatherData =  async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    //const response = await fetch(url)
    const response = axios.get(url);
    console.log(response)
  }
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
