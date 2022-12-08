import React from 'react'
import tip from './Tip.module.css'
import { useState } from 'react';

const TipCalc = ({   bill, setBill, setCustom, number, setNumber, custom, value}) => {
  const [active, setActive] = useState(true)
  const [num, setNum] = useState(null)
  
  const resetHandler = () => {    
    setBill('')
    setNumber('')
    setCustom('')
  }
  const isActive = () => {
    setCustom(true)
  }

  // const tipOutput = bill !== "" && number !== "" && number !== 0 ?
  //   ((Number(bill) * Number(custom)) / (100 * Number(number))).toFixed(2) : "$0.00"

  const tipAmount = bill !== "" && number !== "" && number !== 0  ?
    ((Number(bill) * Number(value)) / number).toFixed(2) : "$0.00"
  
  // const totalOutput = bill !== "" && number !== "" && number !== 0 ?
  //   (Number(bill) * (1 + (Number(custom )/ 100)) / Number(number)).toFixed(2) : "$0.00"
  
  const totalAmount = bill !== "" && number !== "" && number !== 0 ?
    (Number(bill) * (1 + (Number(value))) / Number(number)).toFixed(2) : "$0.00"
  
  
 
    
    return (
      <div className={tip.container}>
        <div className={tip.amount}>
          <p className={tip.tip__paragraph}>
            Tip Amount <br /> <span className={tip.span}>/ person</span>
          </p>
          <form action="" className={tip.tip__form}>
            <div
              className={tip.tip__input}
              onChange={(e) => setNum(e.target.value)}
              maxLength={6}
            >
              {tipAmount}
              {/* {bill&&custom? tipOutput : "" } */}
            </div>
          </form>
        </div>
        <div className={tip.total}>
          <p className={tip.tip__paragraph}>
            Total <br /> <span className={tip.span}>/ person</span>
          </p>
          <form action="" className={tip.tip__form}>
            <div
              className={tip.tip__input}
              onChange={(e) => setNum(e.target.value)}
              maxLength={6}
            >
              {totalAmount}
            </div>
          </form>
        </div>
        <button onClick={resetHandler} className={tip.button}>
          RESET
        </button>
      </div>
    );
}

export default TipCalc
