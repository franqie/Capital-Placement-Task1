import React from 'react';
import { Link } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCardList } from 'react-icons/bs';

const Sidebar:React.FC = () => {
  return (
    <aside className="sidebar">
      <Link to="#">
        <CgMenu />
      </Link>

      <nav className="sidebar_nav">
        <Link to="#">
          <AiOutlineHome />
        </Link>
        <Link to="#">
          <BsCardList />
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar;