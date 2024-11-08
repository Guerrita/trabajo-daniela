import React, {useState} from 'react'

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

  return (
    <section style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 10000,
      height: '100vh',
      width: '100vw',
      backgroundColor: 'var(--beige)',
    }}>
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Líneas diagonales */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    height: '50%',
    width: '100%',
    background: "black",
    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
  }} />
  
  {/* Triángulo interior del color del fondo */}
  <div style={{
    position: 'absolute',
    top: 2,  // Ajusta este valor para cambiar el grosor del borde
    left: 2,
    height: 'calc(50% - 4px)',
    width: 'calc(100% - 4px)',
    background: "var(--beige)",  // O el color de tu fondo
    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
    zIndex: 1
  }} />
        <div style={{
          position: 'relative',
          width: '400px',  // Contenedor más grande para las líneas
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
    </section>
  )
}

export default Letter