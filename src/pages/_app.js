import '../styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {


  return(

     <Component {...pageProps} />

  )
}

export default MyApp
