import React, { useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import Favorite from './Favorite';

export default function Header(props) {
  let [favoriteOpen, setFavoriteOpen] = useState(false)

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
            <GoHeartFill onClick={() => setFavoriteOpen(!favoriteOpen)} className={`favorite-button ${favoriteOpen && 'active'}`} />
        
        {favoriteOpen && (
          <div className='favorite'>
            {props.favorites.map(el =>(
              <Favorite key={el.id} item={el} />
            ))}
          </div>
        )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
