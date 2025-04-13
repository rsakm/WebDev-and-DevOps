import { useState } from 'react'
import useDebounce from './hooks/useDebounce'

function App() {
  // const [query, setQuery] = useState('')

  function sendDataToBackend(){
    fetch("api.amazon.com/search/")
  }

  const debouncedFn = useDebounce(sendDataToBackend,200);

  return (
    <>
        <input type="text" placeholder='search' onChange={debouncedFn} />
    </>
  )
}

export default App
