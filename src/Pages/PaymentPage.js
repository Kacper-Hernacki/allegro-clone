import React from 'react';
import Footer from '../Components/Footer';
import './PaymentPage.css';

function PaymentPage() {
  return (
    <div className="paymentPage">
      <p className="paymentPage__title">Dostawa i płatność</p>
      <div className="paymentPage__container">
        <div className="paymentPage__left">
          <h2>Dane odbiorcy przesyłki</h2>
          <p>Na ten adres zostanie wysłana Twoja przesyłka</p>

          <p>
            Dane wpisane przy pierwszym zakupie zachowamy w Twoim profilu, abyś
            nie musiał powtarzać tego w przyszłości.
          </p>
          <div className="paymentPage__inputContainer">
            <input placeholder="Imię" type="text" />
            <input placeholder="Nazwisko" type="text" />
            <input placeholder="Firma" type="text" />
            <p>Opcjonalnie</p>
            <input placeholder="Adres" type="text" />
            <p>Podaj nazwę ulicy wraz z numerem domu.</p>
            <input placeholder="Kod pocztowy" type="text" />
            <input placeholder="Miasto" type="text" />
            <input placeholder="Nr telefonu" type="text" />
            <p>
              Podaj nr telefonu. Ułatwi to kontakt ze sprzedającym i kurierem.
            </p>
          </div>
        </div>

        <div className="paymentPage__right">
          <h2>Podsumowanie</h2>
          <div className="paymentPage__productPrice">
            <p>Wartość przedmiotów</p>
            <p>39,90 zł</p>
          </div>

          <div className="paymentPage__postman">
            <p>Dostawa</p>
            <p>0,00 zł</p>
          </div>

          <div className="paymentPage__sum">
            <p>Do zapłaty</p>
            <b>
              39<span>,90 zł</span>
            </b>
          </div>

          <button>Kupuję i płacę</button>
          <p>
            Klikając w ten przycisk potwierdzasz zakup. Sprzedawca otrzyma twoje
            zamówienie.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
