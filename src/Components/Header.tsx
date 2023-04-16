type Props = {
  darkMode: boolean,
  changeTheme: () => void
}

function Header({ darkMode, changeTheme }: Props) {
  return (
    <div className="header">
      <div className="github-icon-container">
        <i className="fa-brands fa-github"></i>
      </div>

      <div className="input-container">
        <input className="search-user" type="text" placeholder="Search Users -> sagarmainali" />
        <div className="glass-container">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      {darkMode
        ? <i className="fa-solid fa-sun" onClick={changeTheme}></i>
        : <i className="fa-solid fa-moon" onClick={changeTheme}></i>}
    </div>
  )
}

export default Header