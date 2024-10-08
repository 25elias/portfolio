import React from 'react'
import logo from 'logo'


function Navbar() {
  return (
    <div className='wrapper'>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="/">{logo}</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar