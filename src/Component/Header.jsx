import React from 'react';
import Logo from '../Logonetflix.png';
import {Link} from  'react-router-dom';
import { ImSearch } from 'react-icons/im';

export const Header = () => {
  console.log(ImSearch);
  return (
    <nav className='header'>
      <img src={Logo} alt="ho" />
      <div>
        <Link to='/tvshows'> Tv Shows</Link>
        <Link to='/moviess'> Movies</Link>
        <Link to='/recent'>Recently Added</Link>
        <Link to='/mylist'> My List</Link>
      </div>
      <ImSearch />
    </nav>
  )
}

