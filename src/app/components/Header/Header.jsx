import React from 'react'

import '../Header/Header.css';

import Logo from '../../assets/header/logo.png';
import Basket from '../../assets/header/basket.svg';
import Favorites from '../../assets/header/favorites.png';
import Account from '../../assets/header/account.svg';
import BackgroundLogo from '../../assets/header/background-logo.png';
import close from '../../assets/header/close.png';

const Header = ({ sneakers, handleDelete }) => {
  const [isClose, setIsClose] = React.useState(false)
  const [amount, setAmount] = React.useState(0);

  return (
    <>
      {isClose && (
        <div className="block-cart">
          <div className="orders">
            <img onClick={() => setIsClose(false)} className='close' src={close} alt="" />
            <div className="block-cart-orders-container">
              <h3 className='title'>Корзина</h3>

              <div className="block-cart-orders__sneakers">
                {sneakers.map(sneaker => (
                  <div className='sneaker'>
                    <img src={sneaker.sneakerURL} alt="" style={{ width: '70px', height: '70px' }} />
                    <div className="info">
                      <p className='name'>{sneaker.sneakerName}</p>
                      <b className='price'>{sneaker.price} руб</b>
                    </div>
                    <img onClick={() => handleDelete(sneaker.id)} src={sneaker.close} alt="" style={{ width: '32px', height: '32px' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <header>
        <div className="header-content container">
          <div className="header-description">
            <a href="#"><img src={Logo} alt="Logo" className='header-logo' /></a>
            <div className="header-text">
              <h2 className='header-name'>REACT SNEAKERS</h2>
              <p className='header-name-description'>Магазин лучших кроссовок</p>
            </div>
          </div>

          <div className='header-sections'>
            <div className="header-basket">
              <img onClick={() => setIsClose(true)} src={Basket} alt="Basket" className='header-basket-image' />
              <span className='header-basket-amount'> {amount} руб</span>
            </div>
            <img src={Favorites} alt="Favorites" />
            <img src={Account} alt="Account" />
          </div>
        </div>

        <hr />

        <div className="header-background container">
          <img src={BackgroundLogo} alt="BackgroundLogo" className='background-logo' />
          <div className="header-background-text">
            <h2 className='header-background-heading'>
              <span className='header-title-text'>Stan Smith</span>, Forever!
            </h2>
            <a href="#" className='header-background-btn'>Купить</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;