import { useState } from 'react'
import LandingPage from './pages/user/Landing_page/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
    </>
  )
}

export default App
