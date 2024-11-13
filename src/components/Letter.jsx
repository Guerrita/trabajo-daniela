import React, { useState } from 'react'

import estampilla from '../assets/estampilla.png'
const Letter = ({ changeVisibility }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const buttonStyle = {
    backgroundColor: isPressed ? 'darkred' : 'var(--red)',
    border: 0,
    height: 100,
    width: 100,
    borderRadius: '50%',
    fontSize: 24,
    color: 'white',
    position: 'relative',
    zIndex: 2,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isPressed ? 'scale(0.95)' : isHovered ? 'scale(1.1)' : 'scale(1)',
    boxShadow: isHovered ? '0 0 15px rgba(0,0,0,0.2)' : 'none'
  }

  const containerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10000,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f4e4bc', // Cambiado a color papel antiguo
    overflow: 'hidden'
  }

  const paperEffectStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at top left, transparent 70%, rgba(101, 67, 33, 0.4) 100%),
      radial-gradient(circle at top right, transparent 70%, rgba(101, 67, 33, 0.4) 100%),
      radial-gradient(circle at bottom left, transparent 70%, rgba(101, 67, 33, 0.4) 100%),
      radial-gradient(circle at bottom right, transparent 70%, rgba(101, 67, 33, 0.4) 100%),
      linear-gradient(90deg, rgba(0,0,0,0.03) 50%, transparent 50%),
      linear-gradient(rgba(0,0,0,0.03) 50%, transparent 50%)
      
    `,
    backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 4px 4px, 4px 4px',
    boxShadow: 'inset 0 0 50px rgba(101, 67, 33, 0.5), inset 0 0 100px rgba(101, 67, 33, 0.2)',
    pointerEvents: 'none'
  }

  return (
    <section style={containerStyle}>
      {/* Efecto de papel quemado */}
      <h1 style={{
        position: 'absolute',
        top: '5%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Special Elite, serif',
        color: '#000',
        fontSize: '2rem',
        zIndex: 2,
        textAlign: 'center'
      }}>
        Cartageneros se gozan la primavera de Medellín
      </h1>
      <div style={paperEffectStyle} />
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Líneas diagonales */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '50%',
          width: '100%',
          background: "black",
          clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
          zIndex: 1
        }} />

        {/* Triángulo interior del color del fondo */}
        <div style={{
          position: 'absolute',
          top: 2,
          left: 2,
          height: 'calc(50% - 4px)',
          width: 'calc(100% - 4px)',
          background: "#f4e4bc",  // Cambiado para coincidir con el nuevo color de fondo
          clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
          zIndex: 1
        }} />

        <div style={{
          position: 'relative',
          width: '400px',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Botón circular */}
          <button
            style={buttonStyle}
            onClick={(e) => {
              setIsPressed(true)
              setTimeout(() => setIsPressed(false), 150)
              changeVisibility(e)
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false)
              setIsPressed(false)
            }}>
            Abreme
          </button>
        </div>
      </div>
      <div style={{
        position: "absolute",
        bottom: '3%',
        right: '3%',
        textShadow: '1px 1px 1px rgba(0,0,0,0.1)',
        zIndex: 2
      }}>
        <img
          src={estampilla}
          style={{ width: '60%', marginHorizontal: 'auto' }}
        />
        <h3 style={{
          fontFamily: 'Special Elite, serif',
          textShadow: '1px 1px 1px rgba(0,0,0,0.1)',
        }}>Remite: Daniela Correa Díaz</h3>
      </div>
    </section>
  )
}

export default Letter