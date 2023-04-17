import { useState } from 'react'
import Header from './Components/Header'
import { SearchResult } from './Components/SearchResult'

type UserData = {
     imageUrl: string,
     repos: number,
     followers: number,
     following: number,
     userName: string,
     loginName: string,
     githubUrl: string,
     joinedDate: string,
     bio: string | null,
     location: string | null,
     company: string | null,
     email: string | null,
     blog: string | null,
     twitterUserName: string | null,
     hireable: boolean,
     lastActivity: string,
}

function App() {

     const [data, setData] = useState<UserData>({})
     const [darkMode, setDarkMode] = useState<boolean>(true)

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