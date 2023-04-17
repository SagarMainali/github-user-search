import { useState } from 'react'
import Header from './Components/Header'
import { SearchResult, NoUserFound } from './Components/SearchResult'
import UserData from './model'

function App() {

     const [darkMode, setDarkMode] = useState<boolean>(true)

     const [data, setData] = useState<UserData | null>(null)

     function changeTheme() {
          setDarkMode(
               prevTheme => !prevTheme
          )
     }

     function getData(userInput: string) {
          // e.preventDefault();
          const searchedName = userInput.split(' ').join('')
          fetch(`https://api.github.com/users/${searchedName}`)
               .then(result => result.json())
               .then(data => setData(data))
     }

     return (
          // <div className={`app${darkMode ? '' : ' app-light'}`}>
          <div className={`app${darkMode ? '' : ' app-light'}`}>
               <Header darkMode={darkMode} changeTheme={changeTheme} getData={getData} />
               {data ? <SearchResult data={data} /> : <NoUserFound />}
          </div>
     )
}

export default App