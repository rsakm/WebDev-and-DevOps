import { useState, memo } from "react";

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import './App.css';
import { counterAtom } from "./store/atoms/Counter";
import { counterSelector } from "./store/selector/CounterSelector";

function App(){

  return (
    <RecoilRoot>
      <Buttons/>
      <Counter/>
      <IsEven/>
    </RecoilRoot>
  )
}

function Buttons(){
  const setCount  = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={()=>setCount(count=>count+2)} >Increment</button>
    <button onClick={()=>setCount(count=>count-1)} >Decrement</button>
  </div>
}

function Counter(){
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function IsEven(){
  const even = useRecoilValue(counterSelector);
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App;