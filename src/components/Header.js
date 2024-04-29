import React, { useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import Favorite from './Favorite';

const showFavorites = (props) => {
  let summa = 0
  props.favorites.forEach(el => summa += Number. parseFloat(el.prize))
  return (<div>
      {props.favorites.map(el => (
        <Favorite onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Total amount if you win all competitions: {new Intl.NumberFormat().format(summa)}$</p>
    </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>No favorites...</h2>
  </div>)
}

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
            {props.favorites.length > 0 ? showFavorites(props) : showNothing()}
          </div>
        )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
