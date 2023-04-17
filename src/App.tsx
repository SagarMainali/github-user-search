import { useState } from 'react'
import Header from './Components/Header'
import Message from './Components/Message'
import SearchResult from './Components/SearchResult'
import { UserDataSuccess } from './model'

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

     const [data, setData] = useState<UserDataSuccess | null>(null)

     const [message, setMessage] = useState<string>('Github User Search')

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
                              setMessage('User Not Found')
                              setData(null)
                         }
                    })
          }
     }

     return (
          <div className={`app${darkMode ? '' : ' app-light'}`}>
               <Header darkMode={darkMode} changeTheme={changeTheme} getData={getData} />
               {!data ? <Message message={message} /> : <SearchResult data={data} />}
          </div>
     )
}

export default App

// todo
// display separate component at first reload
// display no result when no user found
// manage multi lines 'bio'
// handle enter keyword press