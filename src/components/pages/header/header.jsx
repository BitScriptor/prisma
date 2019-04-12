import React from "react";
import { Link } from "react-router-dom";
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="text-center">
          centro
        </div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      );
  }
}

export default Header;