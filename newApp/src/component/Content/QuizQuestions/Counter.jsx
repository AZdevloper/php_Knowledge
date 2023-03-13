import React from 'react'

function Counter(props) {
  const number = props.number;
  const value = props.value;
  return <div className='p-8 w-full flex justify-end'>counter : {value} s</div>;
}

export default Counter
