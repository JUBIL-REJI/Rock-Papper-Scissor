import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/contextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <ContextProvider>   
    <App />
    </ContextProvider>
  </BrowserRouter>
)
