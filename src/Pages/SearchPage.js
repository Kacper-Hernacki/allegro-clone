import React from 'react';
import './SearchPage.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SidebarSearch from '../Components/SidebarSearch';
import Footer from '../Components/Footer';
import Sponsored from '../Components/Sponsored';
import SearchResults from '../Components/SearchResults';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__container">
        <div className="searchPage__header">
          <h1>
            szukasz "sztanga" <span>(12 098 ofert)</span>
          </h1>
          <p>
            <StarBorderIcon />
            Obserwuj wyszukiwanie
          </p>
        </div>

        <div className="searchPage__body">
          <SidebarSearch />
          <div className="searchPage__bodyMain">
            <Sponsored />
            <SearchResults />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
