import React from 'react';
import Footer from '../Components/Footer';
import './Register.css';

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <h1>Utwórz konto</h1>
        <div className="register__choice">
          <p>English version</p>

          <div class="register__choiceContainer">
            <ul>
              <li>
                <input type="radio" id="f-option" name="selector" />
                <label for="f-option">Konto Zwykłe</label>
                <p>
                  Konto do zakupów (także dla firm) oraz sporadycznej sprzedaży
                </p>
                <div class="check"></div>
              </li>

              <li>
                <input type="radio" id="s-option" name="selector" />
                <label for="s-option">Konto Firma</label>
                <p>
                  Konto dla osób, które zamierzają sprzedawać w ramach
                  prowadzonej działalności gospodarczej.
                </p>
                <div class="check">
                  <div class="inside"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="register__data">
          <div className="register__dataContainer">
            <div className="register__dataInputs">
              <div className="register__dataInput">
                <input placeholder="E-mail" type="text" />
                <p>
                  Na ten adres będziesz otrzymywać wszystkie wiadomości od
                  Allegro.
                </p>
              </div>
              <div className="register__dataInput">
                <input placeholder="Hasło" type="text" />
                <p>Użyj: 8 znaków, 1 wielkiej litery, 1 cyfry.</p>
              </div>
              <div className="register__dataInputsBirth">
                <p>Data urodzenia</p>
                <input
                  inputMode="numeric"
                  min="1"
                  max="31"
                  placeholder="dzień"
                  type="number"
                />

                <select name="month" id="">
                  <option value="" selected="selected" hidden="">
                    miesiąc
                  </option>
                  <option value="1">stycznia</option>
                  <option value="2">lutego</option>
                  <option value="3">marca</option>
                  <option value="4">kwietnia</option>
                  <option value="5">maja</option>
                  <option value="6">czerwca</option>
                  <option value="7">lipca</option>
                  <option value="8">sierpnia</option>
                  <option value="9">września</option>
                  <option value="10">października</option>
                  <option value="11">listopada</option>
                  <option value="12">grudnia</option>
                </select>
                <input
                  placeholder="rok"
                  type="number"
                  inputMode="numeric"
                  min="1900"
                  max="2020"
                />
                <p className="register__birthDescription">
                  Datę urodzenia potrzebujemy, żeby móc pokazać Ci oferty
                  odpowiednie dla Ciebie.
                </p>
              </div>
            </div>
            <div className="register__dataCheckBoxes">
              <div className="register__dataCheckBox">
                <input type="checkbox" />
                <p>
                  Oświadczam, że znam i akceptuję postanowienia
                  <span> Regulaminu Allegro</span>
                </p>
              </div>
              <div className="register__dataCheckBox">
                <input type="checkbox" />
                <p>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
                  marketingowych i otrzymywanie informacji handlowych od Allegro
                  z wykorzystaniem telekomunikacyjnych urządzeń końcowych (m.in.
                  telefon) oraz środków komunikacji elektronicznej (m.in. SMS,
                  e-mail).
                  <span className="register__optional"> (opcjonalnie)</span>
                  <span className="register__more">rozwiń</span>
                </p>
              </div>
              <div className="register__dataCheckBox">
                <input type="checkbox" />
                <p>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
                  marketingowych i otrzymywanie informacji handlowych od
                  podmiotów współpracujących z Allegro z wykorzystaniem
                  telekomunikacyjnych urządzeń końcowych (m.in. telefon) oraz
                  środków komunikacji elektronicznej (m.in. SMS, e-mail).
                  <span className="register__optional"> (opcjonalnie)</span>
                  <span className="register__more">rozwiń</span>
                </p>
              </div>
            </div>
            <button className="register__button">zakładam konto</button>
          </div>
        </div>

        <p className="register__rules">
          Administratorem Twoich danych osobowych jest Allegro.pl sp. z o.o. z
          siedzibą w Poznaniu (60-166), przy ul. Grunwaldzkiej 182. Twoje dane
          osobowe będą przetwarzane w szczególności w celu wykonania umowy
          zawartej z Tobą, w tym do umożliwienia świadczenia usługi drogą
          elektroniczną oraz pełnego korzystania z platformy handlowej Allegro,
          w tym dokonywania transakcji na naszej platformie. Gwarantujemy
          spełnienie wszystkich Twoich praw wynikających z ogólnego
          rozporządzenia o ochronie danych, tj. prawo dostępu, sprostowania oraz
          usunięcia Twoich danych, ograniczenia ich przetwarzania, prawo do ich
          przenoszenia, niepodlegania zautomatyzowanemu podejmowaniu decyzji, w
          tym profilowaniu, a także prawo wyrażenia sprzeciwu wobec
          przetwarzania Twoich danych osobowych (więcej na temat przetwarzania
          Twoich danych osobowych znajdziesz w
          <span> Polityce ochrony prywatności</span>).
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
