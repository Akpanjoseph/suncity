import './App.css'
import CurrentWeather from './Components/current-weather/CurrentWeather'
import Search from './Components/search/Search'


function App() {

  const hangleOnSearchChange = (searchData)=>{
    console.log(searchData) //handle search data here
  }

  return (
    <div className='container'>
   <Search onSearchChange={hangleOnSearchChange}/>

   <CurrentWeather/>
    </div>
  )
}

export default App
