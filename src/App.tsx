import { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './pages/landing'
import PasarelaPage from './pages/pasarela'

const OCR_UPGRADE_HASH = '#upgrade-ocr'

function App() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash)

    window.addEventListener('hashchange', syncHash)

    return () => {
      window.removeEventListener('hashchange', syncHash)
    }
  }, [])

  return hash === OCR_UPGRADE_HASH ? <PasarelaPage /> : <LandingPage />
}

export default App
