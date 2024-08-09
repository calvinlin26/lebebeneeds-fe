import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import BusinessParam from './features/business-param/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BusinessParam />
  </React.StrictMode>,
)
