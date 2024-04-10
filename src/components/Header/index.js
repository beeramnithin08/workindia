import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends React.Component {
  state = { searchInput: "" };

  onChangingSearchInput = (event) => {
    const { searchInput } = this.state;
    this.setState({ searchInput: event.target.value });
    console.log(searchInput);
  };

  onClickingSearch=()=>{
    
  }

  render() {
    return (
      <div className="header-container">
        <div>
          <img src="https://as1.ftcdn.net/v2/jpg/03/57/28/28/1000_F_357282894_xhQc58VUjqLhvA1ZwJc5JUIkC0a66QZt.jpg" className="logo" />
        </div>
        <div className="header-options">
          <Link to="/" className="link-heading">
            <h1>Popular</h1>
          </Link>
          <Link to="/top-rated" className="link-heading">
            <h1>Top Rated</h1>
          </Link>
          <Link to="/upcoming" className="link-heading">
            <h1>Upcoming</h1>
          </Link>
          <input
            type="search"
            className="input-field"
            onChange={this.onChangingSearchInput}
          />
          <button type="button" className="search-button" onClick={this.onClickingSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
