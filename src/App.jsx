import styles from './App.module.css';
import Card from './components/Card/Card';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState(0);
  const [number, setNumber] = useState(0);
  const [custom, setCustom] = useState('Custom');
  
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>SPLI <br></br>TTER</h1>
      <Card bill={bill}
      setBill={setBill}
      number={number}
      setNumber={setNumber}
      custom={custom}
      setCustom={setCustom}
      />
    </div>
  );
}

export default App;
