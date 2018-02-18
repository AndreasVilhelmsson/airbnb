import React from "react";
import "./header.css";
const Header = props => {
  return (
    <div className="headers">
      <div className="logga">xx</div>
      <div class="search-container">
        <input type="text" placeholder="Search.." name="search" />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#bli en värd">bli en värd</a>
          </li>
          <li>
            <a href="#hjälp">Hjälp</a>
          </li>
          <li>
            <a href="#Bli medlem">Bli medlem</a>
          </li>
          <li>
            <a href="#Logga in">Logga in</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
