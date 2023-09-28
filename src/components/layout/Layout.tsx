import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { NavLink, Outlet } from 'react-router-dom';

const Layout:React.FC = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout-main">
        <nav className="navbar">
          <NavLink to="/program-details" className={({ isActive }) => isActive ? "active" : ""}>program details</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>application form</NavLink>
          <NavLink to="/workflow" className={({ isActive }) => isActive ? "active" : ""}>workflow</NavLink>
          <NavLink to="/preview" className={({ isActive }) => isActive ? "active" : ""}>preview</NavLink>
        </nav>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;