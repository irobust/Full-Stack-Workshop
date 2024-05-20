import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <hr />

        <Outlet />
      </div>
    );
  }

export default Layout