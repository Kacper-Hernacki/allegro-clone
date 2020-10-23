import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="categories">
      <div className="categories__header">
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__headerLeft">
            <h2>DZIAŁY</h2>
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          {' '}
          <div className="categories__headerRight">
            <h2>KORZYŚCI</h2>
          </div>
        </Link>
      </div>
      <div className="categories__body">
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/house-and-tree-3d644b1630.svg"
              alt=""
            />
            Elektronika
          </div>
        </Link>

        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/dress-c001e8d7f1.svg"
              alt=""
            />
            Moda
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/house-and-tree-3d644b1630.svg"
              alt=""
            />
            Dom i Ogród
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/basket-f6c9c75c2a.svg"
              alt=""
            />
            Supermarket
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/baby-58992b9d89.svg"
              alt=""
            />
            Dziecko
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/lipstick-974cf1db4e.svg"
              alt=""
            />
            Uroda
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/first-aid-0c601a56cb.svg"
              alt=""
            />
            Zdrowie
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/book-58344d0822.svg"
              alt=""
            />
            Kultura i rozrywka
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/ball-f1f0883cc6.svg"
              alt=""
            />
            Sport i turystyka
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/car-0b4e0bbc3b.svg"
              alt=""
            />
            Motoryzacja
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/house-and-magnifying-glass-7d24599ece.svg"
              alt=""
            />
            Nieruchomości
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/stamp-d912af3b1c.svg"
              alt=""
            />
            Kolekcje i sztuka
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/skyscraper-1989b66d12.svg"
              alt=""
            />
            Firma i usługi
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://assets.allegrostatic.com/metrum/icon/tickets-b3e077f330.svg"
              alt=""
            />
            eBilet
          </div>
        </Link>
        <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="categories__row">
            <img
              src="https://a.allegroimg.com/original/128d44/a65b526446de941d12f9faa1337f"
              alt=""
            />
            Allegro Lokalnie
          </div>
        </Link>
      </div>
      <div className="categories__all">Wszystkie kategorie</div>
    </div>
  );
}

export default Categories;
