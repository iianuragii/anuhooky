import React from 'react'
import './style.css'

const reducer = (state,action) =>{
    if(action.type === "INCR")
        state = state + 1;
    if(action.type === "DECR")
        state = state - 1;
    return state;
}

const useReducer = () => {
    const data = 10;
    const [state, dispatch] = React.useReducer(reducer, data);

    React.useEffect(() =>{
        document.title = `Anuhooky(${state})`;
    });
  return (
    <>    
      <div className='container'>
          <p>{state}</p>
          <div className='button2' onClick={() => dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
          </div>
          <div className='button2' onClick={() => state > 0?dispatch({type:"DECR"}):dispatch(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Decrement
          </div>
      </div>
    </>
  );
};

export default useReducer