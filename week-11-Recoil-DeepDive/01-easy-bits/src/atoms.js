
import { atom, selector } from "recoil";

export const networkAtom = atom({
    key:"network",
    default:109
})

export const jobAtom = atom({
    key:"job",
    default:0
})

export const messageAtom = atom({
    key:"message",
    default:70
})

export const notificationAtom = atom({
    key:"notification",
    default:99
})

// export const meAtom = atom({
//     key:"me",
//     default:"99"
// })

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const message = get(messageAtom);
        const notification = get(notificationAtom);
        const job = get(jobAtom);
        const network = get(networkAtom);

        return message + notification + job + network
    }
})