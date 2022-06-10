import React from 'react'
import {useState} from 'react';
function Counter(props) {
  const [counter, setcounter] = useState(props.initial);
  const incriment = () => {
    setcounter(counter + 1);
  }
  const decriment = () => {
    if(counter>0)
      setcounter(counter-1);
  }
  return (
    <>
    <div><span>Counter:</span><span data-test-id="ctr-val">{counter}</span></div>
    <div><button data-test-id="ctr-incr" onClick={incriment}>Incriment</button></div>
    <div><button data-test-id="ctr-decr" onClick={decriment}>Decriment</button></div>
    </>
  );
}

export default Counter