// src/context/state.js
import App from 'next/app';
import { createContext, useContext, useMemo, useState } from 'react';
import Overview from '../components/Card/Overview';
import Planet from '../pages/[planet]';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [sharedState, setSharedState] = useState(0)
  let [activeNavLink, setActiveNavLink] = useState("")

  const values = useMemo(
      () => ({
          sharedState,
          setSharedState,
          activeNavLink,
          setActiveNavLink
      }),
      [sharedState, activeNavLink],
  )

  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}