import { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './pages/landing'
import PlansOCR from './pages/PlansOCR'
import { OCR_UPGRADE_PATH } from './routes'

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const syncPathname = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', syncPathname)

    return () => {
      window.removeEventListener('popstate', syncPathname)
    }
  }, [])

  return pathname === OCR_UPGRADE_PATH ? <PlansOCR /> : <LandingPage />
}

export default App
