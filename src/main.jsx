import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
