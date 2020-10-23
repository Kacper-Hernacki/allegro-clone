import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import './ProfilePage.css';
import Monets from '../Components/Monets.png';
import SmartPurple from '../Components/SmartPurple.png';
import YourProduct from '../Components/YourProduct';
import { useStateValue } from '../StateProvider';
import { storage, firebase, auth, db } from '../firebase';

function ProfilePage() {
  const [{ user }] = useStateValue();

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [progress, setProgress] = useState(0);
  const [auctions, setAuctions] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();

    // db stuff
    db.collection('auctions').add({
      description: description,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      price: price,
      username: user.email,
      imgUrl: imageUrl,
    });
    // restet
    setDescription('');
    setImageUrl('');
    setPrice(0);
  };

  const logOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    db.collection('auctions')
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setAuctions(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    console.log('>>>>>>>>>>', auctions);
  }, []);

  return (
    <div className="profilePage">
      <div className="profilePage__container">
        <div className="profilePage__containerSettings">
          <div className="profilePage__left">
            <div className="profilePage__description">
              <h1>Dzień dobry!</h1>
              <p>{user?.email}</p>
              <img src={Monets} alt="" />
              <img src={SmartPurple} alt="" />
              <button onClick={logOut}>Wyloguj</button>
            </div>
            <img
              src="https://a.allegroimg.com/original~ovwcolormcolorgreen300/1d930d/02e3f098419fb04e881a8cda8d76"
              alt=""
            />
          </div>
          <div className="profilePage__right">
            <h1>Wystaw produkt</h1>
            <div className="profilePage__upload">
              <progress
                className="profilePage__uploadProgress"
                value={progress}
                max="100"
              />

              <input
                type="text"
                placeholder="Opis produktu"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
              />
              <input
                type="number"
                placeholder="Cena całkowita, bez przecinka"
                onChange={(event) => setPrice(event.target.value)}
                value={price}
              />
              <p className="profilePage__priceDescription">
                Cena produktu, w pełnych złotych
              </p>
              <input
                type="text"
                placeholder="adres www zdjęcia"
                onChange={(event) => setImageUrl(event.target.value)}
                value={imageUrl}
              />
              <button
                onClick={handleUpload}
                className="profilePage__uploadButton">
                Wstaw
              </button>
            </div>
          </div>
        </div>
        <div className="profilePage__containerProducts">
          <h1>Ostatnio wstawione produkty</h1>
          <div className="profilePage__products">
            {auctions.map((auction) => (
              <YourProduct
                key={auction.id}
                imgUrl={auction.data.imgUrl}
                description={auction.data.description}
                price={auction.data.price}
                user={user?.email}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
