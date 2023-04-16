function Header() {
  return (
    <div className="header">
      <div className="github-icon-container">
        <i className="fa-brands fa-github"></i>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Search Users" />
        <div className="glass-container">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <i className="fa-solid fa-sun"></i>
    </div>
  )
}

export default Header

{/* <i className="fa-solid fa-moon"></i>
< i className="fa-solid fa-location-dot" ></ >
<i className="fa-solid fa-building"></i>
<i className="fa-solid fa-check"></i>
<i className="fa-solid fa-envelope"></i>
<i className="fa-solid fa-link"></i>
<i className="fa-brands fa-twitter"></i> */}