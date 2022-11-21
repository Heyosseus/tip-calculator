import React from 'react'
import tip from './Tip.module.css'
import { useState } from 'react';

const TipCalc = ({   bill, setBill, setCustom, number, setNumber, custom, value}) => {
  const [active, setActive] = useState(true)
  const [num, setNum] = useState(null)
  
  const resetHandler = () => {    
    setBill('')
    setNumber('')
    setCustom({ value: 'Custom' })
  }
  const isActive = () => {
    setCustom(true)
  }

  const tipOutput = bill !== "" && number !== "" && number !== "0" && isActive?
    ((Number(bill) * Number(custom.value)) / (100 * Number(number))).toFixed(2) : "$0.00"
  
  const btnTipOutput = bill !== "" && number !== "" && number !== "0" && active ?
    ((Number(bill) * Number(value)) / (100 * Number(number))).toFixed(2) : "$0.00"
  
  const totalOutput = bill !== "" && number !== "" && number !== "0" && isActive?
    (Number(bill) * (1 + (Number(custom.value) / 100)) / Number(number)).toFixed(2) : "$0.00"
  
  const btnTotalOutput =bill !== "" && number !== "" && number !== "0" && active?
    (Number(bill) * (1 + (Number(value) / 100)) / Number(number)).toFixed(2) : "$0.00"
    
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
              value={active ? btnTipOutput : tipOutput }
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
              value={active ? btnTotalOutput : totalOutput}
            
            />
          </form>
        </div>
        <button onClick={resetHandler} className={tip.button}>RESET</button>
      </div>
    );
}

export default TipCalc
