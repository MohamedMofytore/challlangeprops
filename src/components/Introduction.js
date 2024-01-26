import React from 'react'

function Introduction(props) {
  return (
    <section id="about-me">
    <h1>
      Hello, my name is
      <span className="rotate text-important">{props.name}</span>,<br />
      and i make horrible websites.
    </h1>
    <img className="avatar" src="https://5y8tr.csb.app/images/John-Doe.jpg" alt="jhon-doe" />
  </section>
  )
}

export default Introduction
