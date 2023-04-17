import { useState, useEffect } from 'react'
import Header from './Components/Header'
import UserNotFound from './Components/UserNotFound'
import SearchResult from './Components/SearchResult'
import { UserData } from './model'

// type UserDataSuccess = {
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

     const [message, setMessage] = useState<string>('')

     function changeTheme() {
          setDarkMode(
               prevTheme => !prevTheme
          )
     }

     function getData(userInput: string) {
          if (userInput) {
               const searchedName = userInput.split(' ').join('')
               fetch(`https://api.github.com/users/${searchedName}`)
                    .then(result => result.json())
                    .then(receivedData => {
                         if (receivedData.login) setData(receivedData)
                         else {
                              setMessage(`Your searched query doesn't match any user.`)
                              setData(null)
                         }
                    })
          }
     }

     useEffect(() =>
          getData('sagarmainali')
          , [])

     return (
          <div className={`app${darkMode ? '' : ' app-light'}`}>
               <Header darkMode={darkMode} changeTheme={changeTheme} getData={getData} />
               {!data ? <UserNotFound message={message} darkMode={darkMode} /> : <SearchResult data={data} />}
          </div>
     )
}

export default App

// todo
// display separate component at first reload
// display no result when no user found
// manage multi lines 'bio'
// handle enter keyword press