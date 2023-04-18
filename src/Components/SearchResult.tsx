import { UserData } from '../model'

// type UserDataSuccess = {
//   avatar_url: string,
//   public_repos: number,
//   followers: number,
//   following: number,
//   name: string,
//   login: string,
//   html_url: string,
//   created_at: string,
//   bio: string | null,
//   location: string | null,
//   company: string | null,
//   email: string | null,
//   blog: string | null,
//   twitter_username: string | null,
//   hireable: boolean,
//   updated_at: string,
// }

type Props = {
  data: UserData
}

function SearchResult({ data }: Props) {

  console.log(data)

  return (
    <div className="search-result">

      <div className="profile-container">
        <div className="img-container">
          <img className='img' src={data.avatar_url} alt="pp" />
        </div>
      </div>

      <div className="numbered-data">
        <div className="nd repos">
          <span>{data.public_repos}</span>
          <p>Repos</p>
        </div>
        <div className="nd followers">
          <span>{data.followers}</span>
          <p>Followers</p>
        </div>
        <div className="nd following">
          <span>{data.following}</span>
          <p>Following</p>
        </div>
      </div>

      <div className="for-padding">
        <div className="basic-info">
          <h2>{data.name}</h2>
          <div className="link-jd">
            <a href={data.html_url}>@{data.login}</a>
            <span>Joined - {data.created_at.split('T').slice(0, 1)}</span>
          </div>
        </div>

        <div className="bio">
          {data.bio ? data.bio : 'This profile has no bio'}
        </div>

        <div className="additional-info">
          <hr className="hr-top" />
          <div className="ai-ul">
            <ul className="first-ul">
              <li className="location"><i className="fa-solid fa-location-dot"></i>{data.location ? data.location : 'Not available'}</li>
              <li className="office"><i className="fa-solid fa-building"></i>{data.company ? data.company : 'Not available'}</li>
              <li className="email"><i className="fa-solid fa-envelope"></i>{data.email ? data.email : 'Not available'}</li>
            </ul>
            <ul className="second-ul">
              <li className="blog">
                <i className="fa-solid fa-link"></i>
                <a href={data.blog ? data.blog : ''} className={data.blog ? '' : 'link-disable'}>{data.blog ? 'Blog' : 'No Blogs'}
                </a>
              </li>
              <li className="twitter">
                <i className="fa-brands fa-twitter"></i>
                <a href={`https://twitter.com/${data.twitter_username}`} className={data.twitter_username ? '' : 'link-disable'}>
                  {data.twitter_username ? data.twitter_username : 'Not available'}
                </a>
              </li>
              <li className="hireable"><i className="fa-solid fa-file-code"></i><a href={data.html_url + '?tab=repositories'}>Repositories</a></li>
            </ul>
          </div>
          <hr className="hr-bottom" />
        </div>

        <div className="last-activity">
          Latest Profile Update - {data.updated_at.split('T').slice(0, 1)}
        </div>
      </div>
    </div >
  )
}

export default SearchResult