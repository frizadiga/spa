import React from 'react';
import { Link } from 'react-router-dom';
import './bottom-bar.scss';

const menuList = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/menu',
    text: 'Menu',
  },
]

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      {
        !!menuList && menuList.map((item, i) => 
          <Link to={item.path} key={i}>
            <div className="bottom-bar__item">{item.text}</div>
          </Link>
        )
      }    
    </div>
  );
}

export default BottomBar;