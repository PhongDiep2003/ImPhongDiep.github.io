import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }
// const styles = {
//   global: (props) => ({
//     body: {
//       bg:mode("gray.100", "#000")(props),
//       color: mode("gray.800", "whiteAlpha.900")(props)
//     }
//   })
// }
// const theme = extendTheme({ config, styles })
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
  </React.StrictMode>,
)
