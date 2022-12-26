import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__home">
        <li>
          <NavLink
            to="/"
            end
            className={(nav) =>
              nav.isActive ? "nav__home__link is-active" : "nav__home__link "
            }
          >
            <i className="fa-solid fa-bolt-lightning"></i>
            <span className="nav__home__link__text">Test Hub</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
