import React from 'react';
import './SearchPage.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SidebarSearch from '../Components/SidebarSearch';
import Footer from '../Components/Footer';
import Sponsored from '../Components/Sponsored';
import SearchResults from '../Components/SearchResults';
import { useStateValue } from '../StateProvider';

function SearchPage() {
  const [{ searchedPhrase }] = useStateValue();

  return (
    <div className="searchPage">
      <div className="searchPage__container">
        <div className="searchPage__header">
          <h1>
            szukasz{' '}
            {searchedPhrase.map((item) => (
              <p className="searchPage__searchedPhrase">
                {item.searchedPhrase}
              </p>
            ))}
            <span>(12 098 ofert)</span>
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
