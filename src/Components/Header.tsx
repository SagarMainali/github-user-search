function Header() {
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

      <i className="fa-solid fa-sun"></i>
    </div>
  )
}

export default Header