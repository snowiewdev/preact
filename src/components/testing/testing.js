import { h } from 'preact';
import { useState } from 'preact/hooks';

// import * as S from './styles';

const Testing = () => {

  const [name, setName] = useState('Mary');

  const [count, setCount] = useState(0);
  const increment = (e) => {
    e.preventDefault();
    setCount(count+1);
  } 
  const decrement = (e) =>{
    e.preventDefault();
    setCount(count-1);
  } 
  const reset = (e) => {
    e.preventDefault();
    setCount(0);
  };
   

  return (
    <>
      <div>Testing</div>
        {/* <input type="text" name="name" onChange={}/> */}
        <p> Counter Count: {count} </p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      <form> 
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Testing
