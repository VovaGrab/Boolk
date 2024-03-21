import React from 'react'

export default function header() {
  return (
    <header>
        <div>
            <span className='logo'>Boolk</span>
            <ul className='nav'>
              <li>Your profile</li>
              <li>Your competitions</li>
              <li>Settings</li>
              <li>About us</li>

            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
