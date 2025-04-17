import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/Counter';import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}


function Counter(){
  // // create a recoil atom instead of a state variable
return <div>
  <Value/>
  <Increase/>
  <Decrease/>
</div>  
}

function Value(){
  const count = useRecoilValue(counterAtom);
  return <div>
    {
      count
    }
  </div>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={()=>setCount(count=>count-1)} >Decrease</button>
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={()=>setCount(count=>count+1)} >Increase</button>
  </div>

}

export default App
