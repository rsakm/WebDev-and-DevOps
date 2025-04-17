import { useState, memo } from 'react'
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

// useMemo api in react is used to memoize a function which means that the function will only be called once and the result will be cached
const MemoizedValue = memo(Value);


// // or
const CurrentCount = memo(function(){
  return <div>

  </div>
})

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


/*
React says: Anytime a component re-renders, all its children will also re-render.

But if u wrap a component inside a memo() function, the component wil not re-render when its parent re-renders. 

Only if the props/state of that component changes, the component will re-render
*/
