import { useState } from 'react';
import styles from './NavHeader.module.css';


import colombiaImage from '../assets/colombia.jpg';
import motivacion from '../assets/motivacion.png';
import reto from '../assets/reto.png';
import volver from '../assets/volver.png';

const NavHeader = () => {
  const [activeSection, setActiveSection] = useState('info');

  const sections = [
    { id: 'info', label: 'Información' },
    { id: 'new', label: 'Recién llegada' },
    { id: 'process', label: 'En proceso de adaptación' },
    { id: 'adapted', label: 'Adaptado' },
    { id: 'tips', label: 'Tips' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'info':
        return (
          <div className={styles.sectionContent}>
            <h2>Adaptado</h2>
            <p>Querido lector</p>
            <p>Quiero contarte una historia que cada vez se repite más: la de los jóvenes cartageneros que, con maletas llenas de sueños y expectativas, llegan a Medellín buscando lo que no encuentran en casa. Hace ya varios años, la ciudad se ha convertido en uno de los principales destinos para quienes desean estudiar en una Institución de Educación Superior (IES) de alta calidad, y muchos cartageneros han decidido seguir ese camino.</p>
            <p>Te cuento que, según El Tiempo (2021), en ciudades como Bogotá, solo el 18,31% de los estudiantes logra ingresar a universidades de alta calidad, mientras que, en Medellín, ese porcentaje es mucho mayor, superando el 60%. Esta diferencia ha empujado a muchos jóvenes a migrar, dejando atrás el calor de su tierra para enfrentarse a la vida en una ciudad más fría, pero también llena de oportunidades.</p>
            <p>En casa, la oferta educativa no siempre es suficiente. La Revista Uniandes (2015) lo explica claramente: si alguien se va de su ciudad para estudiar es porque no encuentra lo que necesita donde vive. Esto deja en evidencia una falla en las políticas de educación superior, que no han logrado expandirse lo suficiente en regiones como Cartagena, obligando a los estudiantes a desplazarse si quieren acceder a programas que les permitan crecer profesionalmente.</p>
            <p>El año 2019 fue clave para muchos de estos jóvenes. Un informe de la Universidad Javeriana (2021) muestra que de los 98.604 estudiantes que terminaron el colegio en 2018 y siguieron con la universidad en 2019, más del 70% se mudó a ciudades como Bogotá, Medellín, Cali, Barranquilla y Bucaramanga. </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={colombiaImage}
                style={{ maxWidth: '100%', height: 'auto' }}
                alt="Datos Colombia"
              />
            </div>            <p>Pero lo que a veces no se ve es el impacto emocional de este proceso. Llegar a una ciudad nueva no solo implica cambiar de ambiente, sino también adaptarse a una cultura diferente.</p>
            <p>Los estudiantes cartageneros, como yo, al llegar a Medellín, comienzan un proceso de "aculturación", un término que se usa para describir cómo van integrando costumbres, símbolos y actitudes de la ciudad que ahora los acoge.</p>
            <p>Al mismo tiempo, ellos también dejan su huella, compartiendo su propia cultura costeña con sus nuevos compañeros y cercanos.</p>
            <p>Este proceso, aunque enriquecedor, no siempre es fácil. Muchos jóvenes enfrentan el reto de estar lejos de casa, de sus familias y amigos, y eso tiene un peso emocional que no siempre es visible o reconocido por las instituciones educativas. Aunque se habla mucho de la calidad académica, poco se menciona lo que significa para estos estudiantes hacer este cambio en su vida.</p>
            <p>Así que, mientras seguimos viendo a más cartageneros llegar a Medellín en busca de mejores oportunidades, también es importante reconocer que detrás de cada uno de ellos hay una historia de adaptación, de crecimiento y, en muchos casos, de nostalgia por lo que dejaron atrás.</p>
            <p>Hemos realizado una encuesta para conocer algunos efectos y causas de la situación:</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <img src={motivacion} style={{ maxWidth: '100%', height: 'auto' }} alt="Motivacion" />
            </div>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={volver} style={{ maxWidth: '100%', height: 'auto' }} alt="Volver" />
            </div>
            <br/>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={reto} style={{ maxWidth: '100%', height: 'auto' }} alt="Retos" />
            </div>
            <p>Tesis de grado U. Nacional (2021):</p>
            <p>“Existen situaciones que las estadísticas no pueden medir, como la dificultad de adaptación y la apropiación del lugar o del entorno, con el agravante de los recursos limitados con que cuentan los migrantes”.</p>
          </div>
        );
      case 'new':
        return (
          <div className={styles.sectionContent}>
            <h2>Recién llegada</h2>
            <p>Contenido de recién llegados...</p>
          </div>
        );
      case 'process':
        return (
          <div className={styles.sectionContent}>
            <h2>En proceso de adaptación</h2>
            <p>Contenido del proceso de adaptación...</p>
          </div>
        );
      case 'adapted':
        return (
          <div className={styles.sectionContent}>
            <h2>Adaptado</h2>
            <p>Contenido de adaptados...</p>
          </div>
        );
      case 'tips':
        return (
          <div className={styles.sectionContent}>
            <h2>tips</h2>
            <p>tips de adaptados...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.stickyHeader}>
        <nav>
          <ul className={styles.navList}>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`${styles.navButton} ${activeSection === section.id ? styles.active : ''
                    }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        {renderContent()}
      </main>
    </div>
  );
};

export default NavHeader;