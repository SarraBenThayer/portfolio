import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import { PreferencesProvider } from './context/Preferences'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
    {/* Vercel Web Analytics: anonymous, cookie-free visit counts (enable it in the Vercel dashboard) */}
    <Analytics />
  </React.StrictMode>,
)
