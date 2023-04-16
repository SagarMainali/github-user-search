import { useState } from 'react'
import Header from './Components/Header'
import { SearchResult } from './Components/SearchResult'

function App() {

     const [darkMode, setDarkMode] = useState<boolean>(true)
     console.log(darkMode)

     function changeTheme() {
          setDarkMode(
               prevTheme => !prevTheme
          )
     }

     return (
          // <div className={`app${darkMode ? '' : ' app-light'}`}>
          <div className={`app${darkMode ? '' : ' app-light'}`}>
               <Header darkMode={darkMode} changeTheme={changeTheme} />
               <SearchResult />
          </div>
     )
}

export default App