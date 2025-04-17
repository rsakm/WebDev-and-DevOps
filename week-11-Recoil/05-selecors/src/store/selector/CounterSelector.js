import { counterAtom } from "../atoms/Counter";
import { selector } from "recoil";

export const counterSelector = selector({
    key: "isEvenSelector",
    get: ({get})=>{
        const currCount = get(counterAtom);
        return currCount % 2 == 0;
    }
});