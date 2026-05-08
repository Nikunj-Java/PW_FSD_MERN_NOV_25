import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from "./app/store";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
          <App />
    </ThemeProvider>

  </Provider>

  
)
