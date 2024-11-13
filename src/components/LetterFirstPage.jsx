import React from 'react'
import styles from './LetterFirstPage.module.css'

const LetterFirstPage = ({ changeVisibility }) => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.sectionContent}>
        <h2>
          Hola,
        </h2>
        <p>
          He realizado esta carta con la intención de presentarte algunas historias de estudiantes cartageneros en Medellín en donde podrás conocer algunos de sus momentos vividos en la ciudad como foráneos. 
          Debido a la poca información que existe de situación nace este espacio dirigido a los jóvenes costeños.
        </p>
        <p style={{textAlign: "end"}}>Con cariño, Dani</p>
        <button
          className={styles.button}
          onClick={changeVisibility}>
          Click para conocer las historias
        </button>
      </section>
    </div>
  )
}

export default LetterFirstPage