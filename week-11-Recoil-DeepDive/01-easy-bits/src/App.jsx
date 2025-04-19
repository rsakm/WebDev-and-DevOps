import { useMemo, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

import './App.css'
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms';

function App() {
 const networkNotificationCount = useRecoilValue(networkAtom);
 const [messageCount, setMessageCount] = useRecoilState(messageAtom);
 const jobsCount = useRecoilValue(jobAtom);
 const notificationCount = useRecoilValue(notificationAtom);

//  const totalNotificationsCount = useMemo(()=>{
//   return jobsCount + notificationCount + messageCount+networkNotificationCount;
//  })

//  // or
 const totalNotifications = useRecoilValue(totalNotificationSelector);

  return (
    <>
    <button>Home </button>
    <button>My network ({networkNotificationCount > 99 ? '99+' : networkNotificationCount}) </button>
    <button>Jobs</button>
    <button onClick={() => setMessageCount(messageCount=>messageCount + 1)} >Messaging ({messageCount > 99 ? '99+' : messageCount})</button>
    <button>Notifications</button>
    <button>Me ({totalNotifications})</button>
    </>
  )
}

export default App
