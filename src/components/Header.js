import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { connect } from "react-redux";
import { filterData } from "./../Redux/actions";
function Header({ data, filterData }) {
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
          onKeyUp={(e) => {
            console.log(e.target.value);
            console.log(data);
            filterData(data, e.target.value);
          }}
        />
      </div>
      <div className="header__searchIcon">
        <SearchIcon />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterData: (data, value) => dispatch(filterData(data, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
