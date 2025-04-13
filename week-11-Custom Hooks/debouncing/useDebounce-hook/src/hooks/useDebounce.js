import React, { useRef } from 'react'

function useDebounce(originalFn, delay) {

  const currClock = useRef();
  const fn=()=>{
    clearTimeout(currClock.current);

    currClock.current = setTimeout(originalFn,delay);

  }
  return fn;
}

export default useDebounce