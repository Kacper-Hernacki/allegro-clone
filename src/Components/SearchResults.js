import React, { useEffect, useState } from 'react';
import Searched from './Searched';
import './SearchResults.css';
import { useStateValue } from '../StateProvider';
import { storage, firebase, auth, db } from '../firebase';

function SearchResults() {
  const [{ user }] = useStateValue();
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    db.collection('auctions')
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setAuctions(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  return (
    <div className="searchResults">
      {auctions.map((auction) => (
        <Searched
          key={auction.id}
          imgUrl={auction.data.imgUrl}
          description={auction.data.description}
          price={auction.data.price}
          bought={0}
          username={auction.data.username && auction.data.username}
        />
      ))}

      <Searched
        imgUrl="https://image.ceneostatic.pl/data/products/73912279/i-gorilla-sports-zestaw-sztanga-obciazenia-38kg-winyl.jpg"
        description="Sztanga 38kg HIT"
        price={210}
        bought="3068"
      />
      <Searched
        imgUrl="https://nordicsklep.pl/96254-thickbox_default/hg-pro-9-kg-hantle-gumowane-hms.jpg"
        description="Hantle 9kg"
        price={110}
        bought="358"
      />
      <Searched
        imgUrl="https://sapphire-sport.com/wp-content/uploads/2017/11/hantle-zeliwne-xylo-2x20kg-1.jpg"
        description="Hantle regulowane, żeliwne 5-30kg"
        price={290}
        bought="12"
      />
      <Searched
        imgUrl="https://contents.mediadecathlon.com/p875975/k229df48a8f19114737b33e5acb331d96/875975_default.jpg?format=auto&quality=60&f=800x0"
        description="Hantle 1kg, to też ciężar!"
        price={10}
        bought="8"
      />
      <Searched
        imgUrl="https://m.zdrowyzwierzak.pl/pol_pl_Matatabi-sztanga-zabawka-kota-gryzak-czysci-zeby-3021_1.jpg"
        description="Sztanga gryzak, idealna dla psa"
        price={15}
        bought="98"
      />
      <Searched
        imgUrl="https://sportplus.pl/9778/hantle-stale-3-55-kg-hektor-sport.jpg"
        description="Hantle 10-35kg stojak"
        price={1990}
        bought="78068"
      />
    </div>
  );
}

export default SearchResults;
