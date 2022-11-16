import React from 'react'
import tip from './Tip.module.css'
import { useState } from 'react';

const TipCalc = ({num, setNum, total, setTotal}) => {
    
    return (
      <div className={tip.container}>
        <div className={tip.amount}>
          <p className={tip.tip__paragraph}>
            Tip Amount <br />{' '}
            <span className={tip.span}>/ person</span>
          </p>
          <form action="" className={tip.tip__form}>
            <input
              type="text"
              className={tip.tip__input}
              value={num}
              onChange={(e) => setNum(e.target.value)}
              
            />
          </form>
        </div>
        <div className={tip.total}>
          <p className={tip.tip__paragraph}>
            Total <br /> <span className={tip.span}>/ person</span>
          </p>
          <form action="" className={tip.tip__form}>
            <input
            contentEditable='off'
              type="text"
              className={tip.tip__input}
              value={total}
            //   onChange={(e) => setTotal(e.target.value)}
            />
          </form>
        </div>
        <button onClick={e=>setNum('$0')} className={tip.button}>RESET</button>
      </div>
    );
}

export default TipCalc
