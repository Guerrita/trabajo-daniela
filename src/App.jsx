import { useState } from 'react'
import './App.css'

import NavHeader from './components/NavHeader'
import Letter from './components/Letter'

function App() {
  const [isLetterVisible, setIsLetterVisible] = useState(true)

  const changeVisibility = () => {
    setIsLetterVisible(false)
  }

  return (
    <>
      {isLetterVisible ? (
        <Letter changeVisibility={changeVisibility}/>
      ) : (
        <NavHeader />
      )}
    </>
  )
}

export default App
