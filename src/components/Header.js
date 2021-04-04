import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
function Header() {
  return (
    <div className="header">
      <div className="header__back">
        <ArrowBackIcon />
      </div>
      <div className="header__search">
        <input
          type="text"
          maxLength="30"
          className="search__input"
          placeholder="search..."
        />
      </div>
      <div className="header__searchIcon">
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
