import '../styles/globals.css'
import { AppWrapper, useAppContext } from '../context/state'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }) {

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
