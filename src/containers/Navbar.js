import React, { Component } from 'react';
import { Link } from "react-router-dom"; 

import NavigationItem from '../components/NavigationItem'
import SearchLogo from '../static/images/search-icon.svg';
import LusioLogo from '../static/images/Lusio_Logo_RGB.png';
import BellLogo from '../static/images/bell-logo.svg';
import DropdownArrow from '../static/images/drop-down-arrow.svg';
import DropdownContent from "../components/DropdownContent";


class navigation extends Component {
  state = {
    scrolling: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /** changes the scrolling state depending on the Y-position */
  handleScroll = (event) => {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }


  render() {
    const { scrolling } = this.state;
    const { showMovies } = this.props;

    return (
      <nav className={"navigation " + (scrolling ? "black" : "")} >
        <ul className="navigation__container">
          <NavigationItem link="/" exact><img className="navigation__container--logo" src={LusioLogo} alt="" /></NavigationItem>
          <DropdownArrow className="navigation__container--downArrow-2"></DropdownArrow>
          <Link to="/" className="navigation__container-link pseudo-link">Home</Link>
          <div className="navigation__container-link pseudo-link">Recommended</div>
          <div className="navigation__container-link pseudo-link">Popular</div>
          <div className="navigation__container-link pseudo-link">Recently Added</div>
          <div className="navigation__container-link pseudo-link">My List</div>


          <div className="navigation__container--left">
            <SearchLogo className="logo" />

            <input
              onChange={showMovies}
              className="navigation__container--left__input"
              type="text"
              placeholder="Title, genres, people" />

          </div>

          <div className="navigation__container-link pseudo-link">Roms</div>
          <div className="navigation__container-link pseudo-link">About</div>
          <BellLogo className="navigation__container--bellLogo" />

          <DropdownContent />
          <DropdownArrow className="navigation__container--downArrow" />

        </ul>
      </nav>
    )
  }
}

export default navigation; 