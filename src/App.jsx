import './App.css'
import Search from './Components/search/Search'

function App() {

  const hangleOnSearchChange = (searchData)=>{
    console.log(searchData) //handle search data here
  }

  return (
    <div className='container'>
   <Search onSearchChange={hangleOnSearchChange}/>
    </div>
  )
}

export default App
