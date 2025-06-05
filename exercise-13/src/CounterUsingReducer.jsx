import React, {useReducer} from 'react'

const initialState ={ countA:0, countB:0 };

const reducer=(state, action)=>{
    switch(action.type){
        case 'incrementA':
            return { ...state, countA: state.countA + 1 };
        case 'decrementA':
            return { ...state, countA: state.countA - 1 };
        case 'incrementB':
            return { ...state, countB: state.countB + 1 };
        case 'decrementB':
            return { ...state, countB: state.countB - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
const CounterUsingReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { countA, countB } = state;
  return (
    <div>
        <h1>Double Counter </h1>
        <h1>Counter A: {countA}</h1>
        <button onClick={() => dispatch({ type: 'incrementA' })}>+ A</button>&nbsp;
        <button disabled={countA==0} onClick={() => dispatch({ type: 'decrementA' })}>- A</button> 
        <br />
        <br />
        <h1>Counter B: {countB}</h1>
        <button onClick={() => dispatch({ type: 'incrementB' })}>+ B</button> &nbsp;
        <button disabled={countB==0} onClick={() => dispatch({ type: 'decrementB' })}>- B</button>
        <br />
        <br />
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        {/* <h2>Total Count: {countA + countB}</h2> */}
    </div>
  )
}

export default CounterUsingReducer