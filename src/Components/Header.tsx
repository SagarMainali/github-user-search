import { useState } from "react"

type Props = {
  darkMode: boolean,
  changeTheme: () => void,
  getData: (userInput: string) => void
}

// Header Component
function Header({ darkMode, changeTheme, getData }: Props) {

  const [input, setInput] = useState<string>('')

  // debouncing the original function
  function debounce(callback: (input: string) => void, delay: number) {
    let timer: number
    return function (input: string) {
      clearTimeout(timer)
      timer = setTimeout(() => callback(input), delay)
    }
  }

  // calling the returned function from debounce function
  const debouncedFunction = debounce((input: string) => {
    getData(input)
  }, 300)

  // handling enter key
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    event.key === 'Enter' && debouncedFunction(input)
  }

  return (
    <div className="header">
      <div className="github-icon-container">
        <i className="fa-brands fa-github"></i>
      </div>

      <div className="input-container">
        <input className="search-user" type="text" placeholder="Search Users" onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
        <button className="glass-container" onClick={() => debouncedFunction(input)} >
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