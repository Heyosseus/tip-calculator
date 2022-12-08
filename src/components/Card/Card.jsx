import React from 'react';
import card from './Card.module.css';
import TipCalc from '../TipCalc/TipCalc';
import { useState } from 'react';

const Card = ({bill, setBill, number, setNumber, custom, setCustom}) => { 

  const [value, setValue] = useState(null)
  
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
              onClick={() => setBill("")}
              onChange={(e) => setBill(+e.target.value)}
              maxLength={5}
            />
          </form>

          <p className={card.select__paragraph}>Select Tip %</p>
          <div className={card.btn__container}>
            <button className={card.button} onClick={() => setValue(0.05)}>
              5%
            </button>
            <button className={card.button} onClick={() => setValue(0.1)}>
              10%
            </button>
            <button className={card.button} onClick={() => setValue(0.15)}>
              15%
            </button>
            <button className={card.button} onClick={() => setValue(0.25)}>
              25%
            </button>
            <button className={card.button} onClick={() => setValue(0.5)}>
              50%
            </button>
            <button className={card.button__form}>
              <input
                type="text"
                className={card.btn__input}
                value={value && value * 100}
                placeholder='Custom'
                onClick={() => setValue("")}
                onChange={(e) => setValue(e.target.value / 100)}
                maxLength={5}
                max={100}
              />
            </button>
          </div>

          <p className={card.num__paragraph}>
            Number of People{" "}
            <span
              className={
                number.length === 0 ? card.num__error : card.num__hidden
              }
            >
              Can't be zero
            </span>
          </p>
          <form
            action=""
            className={
              number.length === 0 ? card.bill__form__error : card.bill__form
            }
          >
            <div className={card.person}></div>
            <input
              type="text"
              className={card.bill__input}
              value={number}
              onChange={(e) => setNumber(+e.target.value)}
              onClick={(e) => setNumber("")}
              maxLength={5}
              // style={{borderColor: number.length === 0 ? '#26C2AE' : '#E17052'}}
            />
          </form>
        </div>
        <TipCalc
          className={card.tip}
          bill={bill}
          setBill={setBill}
          number={number}
          setNumber={setNumber}
          custom={custom}
          setCustom={setCustom}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default Card;
