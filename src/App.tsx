import { useState } from 'react'
import Header from './Components/Header'
import SearchResult from './Components/SearchResult'
import UserNotFound from './Components/UserNotFound'
import ShowFirst from './ShowFirst'
import UserData from './model'

// type UserData = {
//      avatar_url: string,
//      public_repos: number,
//      followers: number,
//      following: number,
//      name: string,
//      login: string,
//      html_url: string,
//      created_at: string,
//      bio: string | null,
//      location: string | null,
//      company: string | null,
//      email: string | null,
//      blog: string | null,
//      twitter_username: string | null,
//      hireable: boolean,
//      updated_at: string,
// }

function App() {

     const [darkMode, setDarkMode] = useState<boolean>(true)

     const [data, setData] = useState<UserData | null>(null)

     function changeTheme() {
          setDarkMode(
               prevTheme => !prevTheme
          )
     }

     function getData(userInput: string) {
          const searchedName = userInput.split(' ').join('')
          fetch(`https://api.github.com/users/${searchedName}`)
               .then(result => result.json())
               .then(data => setData(data))
     }

     return (
          // <div className={`app${darkMode ? '' : ' app-light'}`}>
          <div className={`app${darkMode ? '' : ' app-light'}`}>
               <Header darkMode={darkMode} changeTheme={changeTheme} getData={getData} />
               {/* {!data && <ShowFirst />} */}
               {data ? <SearchResult data={data} /> : <UserNotFound />}
          </div>
     )
}

export default App

// todo
// display separate component at first reload
// display no result when no user found
// manage multi lines 'bio'
// handle enter keyword press