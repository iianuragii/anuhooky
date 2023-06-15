import React from 'react'
import './style.css'

const useState = () => {
  const data = 10;
  const [index, setIndex] = React.useState(data);
  React.useEffect(() =>{
      document.title = `Anuhooky(${index})`;
  });

  return (
    <>    
      <div className='container'>
          <p>{index}</p>
          <div className='button2' onClick={() => setIndex(index+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
          </div>
          <div className='button2' onClick={() => index > 0?setIndex(index-1):setIndex(0)}>
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

export default useState