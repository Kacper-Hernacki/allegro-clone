import React, { useState } from 'react';
import './Header.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router-dom';

function Header() {
  const [{ basket, user, searchedPhrase }, dispatch] = useStateValue();

  const history = useHistory();
  const [input, setInput] = useState('');

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: 'SEARCH_PRODUCT',
      item: {
        searchedPhrase: input,
      },
    });

    history.push('/search');
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg"
          alt=""
        />
      </Link>

      <div className="header__middle">
        <form className="header__form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="header__input"
            placeholder="czego szukasz?"
          />
          <div className="header__searchMore">
            <button className="header__searchMoreButton">szukaj wielu</button>
          </div>

          <div className="header__selectContainer">
            <span className="header__selectSpan">
              <span className="header__selectedSpan">Wszędzie</span>
            </span>
            <div className="header__selectOptions">
              <select className="header__select">
                <option value="">Wszystkie kategorie</option>
                <optgroup label="Kategorie">
                  <option value="/kategoria/">Dom i ogród</option>
                  <option value="/kategoria/">Dziecko</option>
                  <option value="/kategoria/">Elektronika</option>
                  <option value="/kategoria/">Firma i usługi</option>
                  <option value="/kategoria/">Kolekcje i sztuka</option>
                  <option value="/kategoria/">Kultura i rozrywka</option>
                  <option value="/kategoria/">Moda</option>
                  <option value="/kategoria/">Motoryzacja</option>
                  <option value="/kategoria/">Nieruchomości</option>
                  <option value="/kategoria/">Sport i turystyka</option>
                  <option value="/kategoria/">Supermarket</option>
                  <option value="/kategoria/">Uroda</option>
                  <option value="/kategoria/">Zdrowie</option>
                </optgroup>
                <optgroup label="Inne opcje">
                  <option value="/kategoria/">Cele charytatywne</option>
                  <option value="/kategoria/">Organizacje charytatywne</option>
                  <option value="/kategoria/">Użytkownicy</option>
                  <option value="/kategoria/">Zakończone</option>
                </optgroup>
              </select>
              <ExpandMoreIcon className="header__icon header__selectIcon" />
            </div>
          </div>

          <button type="submit" onClick={search} className="header__button">
            SZUKAJ
          </button>

          <button
            onClick={search}
            type="submit"
            className="header__button--searchIcon">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className="header__right">
        <Link to={!user ? '/login' : '/profile'}>
          <IconButton>
            <StarBorderOutlinedIcon className="header__icon" />
          </IconButton>
        </Link>

        <Link to={!user ? '/login' : '/profile'}>
          <IconButton>
            <ForumOutlinedIcon className="header__icon" />
          </IconButton>
        </Link>

        <Link to={!user ? '/login' : '/profile'}>
          <IconButton>
            <NotificationsNoneOutlinedIcon className="header__icon" />
          </IconButton>
        </Link>

        <Link to="/cart">
          <IconButton>
            <LocalMallOutlinedIcon className="header__icon" />
            {basket?.length > 0 && (
              <div className="header__cartNumber">{basket?.length}</div>
            )}
          </IconButton>
        </Link>

        <Link to={!user ? '/login' : '/profile'}>
          <IconButton className=" header__icon--person">
            <PersonOutlinedIcon className="header__icon" />
          </IconButton>
        </Link>

        <Link
          to={!user && '/login'}
          style={{ color: 'inherit', textDecoration: 'none' }}>
          <div className="header__rightSmart">
            <div className="header__rightTitle">
              <h4>
                bądź <span>Smart!</span>
              </h4>
              <h3>Moje Allegro</h3>
            </div>
            <IconButton>
              <ExpandMoreIcon className="header__icon" />
            </IconButton>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
