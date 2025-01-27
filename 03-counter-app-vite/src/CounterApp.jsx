import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  console.log('render'); //Cuando cambia el estado, el componente se vuelve a ejecutar.

  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter( (c) => c + 1 );
  }

  const handleSubstract = () => {
    setCounter( (c) => c - 1 );
  }

  const handleReset = () => {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button aria-label="btn-addt" onClick={ handleAdd }>+1</button>
      <button aria-label="btn-substract" onClick={ handleSubstract }>-1</button>
      <button aria-label="btn-reset" onClick={ handleReset } >Reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}
