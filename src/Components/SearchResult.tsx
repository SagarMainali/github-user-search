function SearchResult() {
  return (
    <div className="search-result">

      <div className="profile-container">
        <div className="img-container">
          <img className='img' src="https://avatars.githubusercontent.com/u/77186948?v=4" alt="pp" />
        </div>
      </div>

      <div className="data-container">

        <div className="number-data">
          <div className="nd repos">
            <span>22</span>
            <p>Repos</p>
          </div>
          <div className="nd followers">
            <span>18</span>
            <p>Followers</p>
          </div>
          <div className="nd following">
            <span>8</span>
            <p>Following</p>
          </div>
        </div>

        <div className="for-padding">
          <div className="basic-info">
            <h2>Sagar Mainali</h2>
            <div className="link-jd">
              <a href="">@Sagar Mainali</a>
              <span>Joined - 14 Apr, 2023</span>
            </div>
          </div>

          <div className="bio">
            Computer Enthusiast
          </div>

          <div className="additional-info">
            <hr className="hr-top" />
            <div className="ai-ul">
              <ul className="first-ul">
                <li className="location"><i className="fa-solid fa-location-dot"></i>Kathmandu</li>
                <li className="office"><i className="fa-solid fa-building"></i>Not available</li>
                <li className="email"><i className="fa-solid fa-envelope"></i>Not available</li>
              </ul>
              <ul className="second-ul">
                <li className="blog"><i className="fa-solid fa-link"></i>Not available</li>
                <li className="twitter"><i className="fa-brands fa-twitter"></i>Not available</li>
                <li className="hireable"><i className="fa-solid fa-check"></i>Hireable</li>
              </ul>
            </div>
            <hr className="hr-bottom" />
          </div>

          <div className="last-activity">
            Last Activity - 27 June, 2023
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult

{/* <i className="fa-solid fa-moon"></i> */ }