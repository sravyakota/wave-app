import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nxtWaveLogo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="heading">Wave</p>
    </div>
    <ul className="nav-items">
      <li>
        <Link className="heading" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="heading" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="heading" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
