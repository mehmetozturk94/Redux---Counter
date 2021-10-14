import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.showCounter);

  const incrementHandler=()=>{
    dispatch({type: 'increment'})
  }
  const decrementHandler=()=>{
    dispatch({type : 'decrement'})
  }
  const incrementbyFiveHandler=()=>{
    dispatch({type : 'incrementbyfive', amount : 5})
  }

  const toggleCounterHandler = () => {
    dispatch({type : 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <button
          className={classes.button}
          aria-label="Decrement value"
          onClick={decrementHandler}
        >
          -
        </button>
        <span className={classes.value}></span>
        <button
          className={classes.button}
          aria-label="Increment value"
          onClick={incrementHandler}
        >
          +
        </button>
        <button
          className={classes.button}
          aria-label="Increment 5"
          
          onClick={incrementbyFiveHandler}
        >Increment 5
        </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
