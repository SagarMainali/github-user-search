import { useState } from 'react'
import Header from './Components/Header'
import SearchResult from './Components/SearchResult'

function App() {

     const [darkmode, setDarkMode] = useState<boolean>(true)

     return (
          <div>
               <Header />
               <SearchResult />
          </div>
     )
}

export default App