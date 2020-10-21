import React from 'react';
import './SidebarSearch.css';
import SmartLogo from './SmartLogo.png';

function SidebarSearch() {
  return (
    <div className="sidebarSearch">
      <div className="sidebarSearch__categories">
        <h1>Podkategorie</h1>
        <h2>Allegro</h2>
        <h3>popularne</h3>
        <p>Sport i turystyka</p>
        <div className="sidebarSearch__categoriesRow">
          <p>trening siłowy</p>
          <p>4223</p>
        </div>
        <div className="sidebarSearch__categoriesRow">
          <p>Sztangi</p>
          <p>23</p>
        </div>
        <div className="sidebarSearch__categoriesRow">
          <p>Hantle</p>
          <p>167</p>
        </div>
        <div className="sidebarSearch__categoriesRow">
          <p>ławki</p>
          <p>13</p>
        </div>
        <h3>wszystkie</h3>

        <div className="sidebarSearch__categoriesRow">
          <p>Dom i Ogród</p>
          <p>637</p>
        </div>

        <div className="sidebarSearch__categoriesRow">
          <p>Dziecko</p>
          <p>457</p>
        </div>

        <p className="sidebarSearch__more">Więcej</p>
      </div>
      <div className="sidebarSearch__filters">
        <h2>Filtry</h2>
        <h3>Allegro Smart!</h3>
        <div className="sidebarSearch__filtersRowSmart">
          <input type="checkBox" />
          <p>
            Darmowa dostawa <img src={SmartLogo} />
          </p>
        </div>
        <h3>stan</h3>
        <div className="sidebarSearch__filtersRow">
          <div className="sidebarSerch__filterLeft">
            <input type="checkBox" />
            <p>nowe</p>
          </div>
          <p>12009</p>
        </div>

        <div className="sidebarSearch__filtersRow">
          <div className="sidebarSerch__filterLeft">
            <input type="checkBox" />
            <p>używane</p>
          </div>
          <p>609</p>
        </div>
      </div>
      <div className="sidebarSearch__cities">
        <h2>Popularne miasta</h2>
        <p>Warszawa</p>
        <p>Kraków</p>
        <p>Wrocław</p>
        <p>Poznań</p>
        <p>Katowice</p>
        <p>Gdańsk</p>
      </div>
    </div>
  );
}

export default SidebarSearch;
