import React from 'react'

function NavBar(props) {
  return (
    <header>
    <h1>John Doe</h1>
    <ul className="navmenu">
      <li><a href="#">{props.test}</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </header>
  )
}

export default NavBar
