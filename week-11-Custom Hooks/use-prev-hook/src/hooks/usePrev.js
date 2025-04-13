import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

function usePrev(value) {
    const ref = useRef();

    useEffect(()=>{
        ref.current = value;
    },[value])


    return ref.current;

    //  it returns first then effects get called
}

export default usePrev