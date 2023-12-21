import * as React from 'react'
import App from './App.jsx'
import {ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import  ColorModeSwitcher  from './ColorModeSwitcher.jsx'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ColorModeScript/>
     <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <App />
    </ChakraProvider>
     
     
  </React.StrictMode>,
)
