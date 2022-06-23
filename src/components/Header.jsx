import React from 'react'

const Header = () => {
  return (
    <nav className='green darken-1'>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">React Shop</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/GeneralDennis/react-shop/" target="_blank" rel="norefferer">Repo</a></li>
      </ul>
    </div>
  </nav>
  )
}
export default Header