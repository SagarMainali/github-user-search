import { FaSearch } from 'react-icons/fa'

function Header() {
  return (
    <div className="header">
      <div className="input-container">
        <input type="text" placeholder="Search Users" />
        <FaSearch />
      </div>
    </div>
  )
}

export default Header