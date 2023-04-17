import { useState } from "react"

type Props = {
  darkMode: boolean,
  changeTheme: () => void,
  getData: (userInput: string) => void
}

function Header({ darkMode, changeTheme, getData }: Props) {

  const [input, setInput] = useState<string>('')

  return (
    <div className="header">
      <div className="github-icon-container">
        <i className="fa-brands fa-github"></i>
      </div>

      <div className="input-container">
        <input className="search-user" type="text" placeholder="Search Users -> sagarmainali" onChange={(e) => setInput(e.target.value)} />
        <button className="glass-container" onClick={() => getData(input)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {
        darkMode
          ? <i className="fa-solid fa-sun" onClick={changeTheme}></i>
          : <i className="fa-solid fa-moon" onClick={changeTheme}></i>
      }
    </div >
  )
}

export default Header