import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Search } from '.';

function Header () {
    return(
      <header className="header">
        <div className="container">
          <div className="header__main">
            <ul className='navList'>
              <li className='navList__item'>
                <NavLink to="/" className='navList__item-link' exact activeClassName="active">
                  <span>News</span>  
                </NavLink>
              </li>
              <li className='navList__item'>
                <NavLink to="/marks" className='navList__item-link' exact activeClassName="active">
                  <span>BookMarks</span> 
                </NavLink>
              </li>
              <li className='navList__item'>
                <NavLink to="/search" className='navList__item-link' exact activeClassName="active">
                  <span>SearchPage</span> 
                </NavLink>
              </li>
            </ul>
            <div className="header__main-search">
              {/* <Search/> */}
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;