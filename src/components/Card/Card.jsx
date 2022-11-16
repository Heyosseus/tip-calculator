import React from 'react';
import card from './Card.module.css';
import TipCalc from '../TipCalc/TipCalc';
import { useState } from 'react';

const Card = ({bill, setBill, number, setNumber, custom, setCustom}) => { 
  const [num, setNum] = useState(`$0.00`);
  const [total, setTotal] = useState(`$0.00`);

  return (
    <div className={card.container}>
      <div className={card.card}>
        <div className={card.first__col}>
          <p className={card.bill__paragraph}>Bill</p>
          <form action="" className={card.bill__form}>
            <div className={card.dollar}></div>
            <input
              type="text"
              className={card.bill__input}
              value={bill}
              onClick={() => setBill('')}
              onChange={(e) => setBill(e.target.value)}
            />
          </form>

          <p className={card.select__paragraph}>Select Tip %</p>
          <div className={card.btn__container}>
            <button className={card.button}>5%</button>
            <button className={card.button}>10%</button>
            <button className={card.button}>15%</button>
            <button className={card.button}>25%</button>
            <button className={card.button}>50%</button>
            <button className={card.button__form}>
              <input
                type="text"
                className={card.btn__input}
                value={custom}
                onClick={()=>setCustom('')}
                onChange={e=>setCustom(e.target.value)}
              />
            </button>
          </div>

          <p className={card.num__paragraph}>Number of People <span className={number.length === 0 ? card.num__error : card.num__hidden}>Can't be zero</span></p>
          <form action="" className={number.length === 0 ? card.bill__form__error : card.bill__form }>
            <div className={card.person}></div>
            <input
              type="text"
              className={card.bill__input}
              value={number}
              onChange={e=>setNumber(e.target.value)}
              onClick={(e) => setNumber('')}
              // style={{borderColor: number.length === 0 ? '#26C2AE' : '#E17052'}}
            />
          </form>
        </div>
        <TipCalc className={card.tip} 
        num={num} 
        setNum={setNum}
        total={total} 
        setTotal={setTotal}
        />
      </div>
    </div>
  );
};

export default Card;
