import { useState } from 'react'
import './App.css'

import NavHeader from './components/NavHeader'
import Letter from './components/Letter'
import LetterFirstPage from './components/LetterFirstPage'


function App() {
  const [isLetterCoverVisible, setIsLetterCoverVisible] = useState(true)
  const [isLetterVisible, setIsLetterVisible] = useState(true)

  const changeVisibility = () => {
    setIsLetterCoverVisible(false)
  }
  const changeLetterVisibility = () => {
    setIsLetterVisible(false)
  }

  return (
    <>
      {isLetterCoverVisible ? (
        <Letter changeVisibility={changeVisibility} />
      ) : (

        isLetterVisible ? (
          <LetterFirstPage changeVisibility={changeLetterVisibility} />
        ) :
          (
            <NavHeader />
          )
      )}
    </>
  )
}

export default App
