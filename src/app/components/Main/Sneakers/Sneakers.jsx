import React from 'react'
import { sneakersData } from '../../../DataBase/Sneakers';

import '../Sneakers/Sneakers.css';


const Sneakers = ({ sneakers, addToOrder }) => {
  return (
    <div className="sneakers container">
      <div className="sneakers-head">
        <h2 className='sneakers-title'>Все кроссовки</h2>
        <input type="text" placeholder='Поиск...' />
      </div>

      <div className="sneaker-cards">
        {sneakersData.map(sneaker => (
          <div className='sneaker-card'>
            <div className="sneaker-unliked">
              <img src={sneaker.unliked} />
            </div>
            <div className="sneaker-url">
              <img src={sneaker.sneakerURL} />
            </div>
            <p className='sneaker-name'>{sneaker.sneakerName}</p>

            <div className="sneaker-price__plus">
              <div>
                <span>ЦЕНА:</span>
                <br />
                <b>{sneaker.price} руб</b>
              </div>
              <img
                onClick={() => addToOrder(sneaker)}
                src={sneakers.some(obj => obj.id === sneaker.id) ? sneaker.saved : sneaker.plus}
                className='sneaker-plus'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sneakers;