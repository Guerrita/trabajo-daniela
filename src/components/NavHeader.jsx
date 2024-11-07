import { useState } from 'react';
import styles from './NavHeader.module.css';


import colombiaImage from '../assets/colombia.jpg';
import sebastian from '../assets/sebastian.jpg';
import rana1 from '../assets/rana1.jpg';
import rana2 from '../assets/rana2.jpg';
import familia from '../assets/familia.jpg';
import motivacion from '../assets/motivacion.png';
import reto from '../assets/reto.png';
import volver from '../assets/volver.png';

const NavHeader = () => {
  const [activeSection, setActiveSection] = useState('info');

  const sections = [
    { id: 'info', label: 'Contexto' },
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
            <h2>Querido lector</h2>
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
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={volver} style={{ maxWidth: '100%', height: 'auto' }} alt="Volver" />
            </div>
            <br />

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
            <h2>El relato de una cartagenera recién llegada:</h2>
            <h3>Siendo primípara universitaria en tiempos de COVID</h3>
            <h3>Por: Daniela Correa Díaz</h3>
            <p>Nunca pensé que mi primer año de universidad vendría acompañado de una pandemia. Era enero de 2020, acababa de llegar a Medellín con toda la ilusión de empezar una nueva etapa en mi vida, cuando todo cambió de un momento a otro. Nos encerraron una semana de marzo, y allí estaba yo, recién llegada, primípara y lejos de casa, compartiendo un apartamento con mi primo hermano. No imaginaba que lo más complicado de mi llegada a la ciudad no sería adaptarme a las clases, sino enfrentarme a una ambulancia, un hospital vacío y una sensación de soledad que, hasta ese momento, no conocía.</p>
            <p>Una tarde de esa misma semana, un fuerte dolor en el estómago me empezó a preocupar. Mi primo, con su típica tranquilidad, me decía que probablemente solo necesitaba ir al baño, pero yo sabía que era algo más. El dolor persistió todo el día, hasta que por la noche apenas podía respirar. Fue entonces cuando decidimos llamar a una ambulancia. Mientras esperábamos, mi primo le contó a mis papás, quienes, desde Cartagena, no ocultaron su preocupación.</p>
            <p>Tiempo antes de ser ingresada a cirugía pude percibir y darme cuenta de la situación que estábamos viviendo. De por si el ambiente en urgencias es bastante tenso y ya en esas circunstancias era aterrador.</p>
            <p>Urgencias estaba vacío. Solo se escuchaban los murmullos de los pacientes ingresados por COVID-19. Uno de ellos, un viejito con alzhéimer, parecía más perdido que yo misma, preguntando con miedo a dónde lo llevarían. Esa escena, en medio de la soledad del hospital, me recordó cuán frágil era todo en esos momentos.</p>
            <p>Finalmente, me dieron de alta, pero la sensación de vulnerabilidad no se fue.</p>
            <p>Al regresar a casa después de esa noche en urgencias, todo se sentía más extraño. Los primeros días no estuve sola, la señora que venía a hacer el aseo en la casa se ofreció a cuidarme. Su presencia fue un alivio, pero aún así, no era lo mismo. </p>
            <p>Mi cuerpo seguía resentido, con el abdomen hinchado, y cada movimiento era un recordatorio de que estaba lejos de todo lo que conocía. Tenía que reponerme rápidamente porque sabía que ella no podría quedarse mucho tiempo.</p>
            <p>Al tercer día, cuando ella se tuvo que ir, fue entonces cuando realmente me golpeó la realidad de estar lejos de casa en medio de la pandemia. A las seis de la mañana, me levantaba, aún con el cuerpo adolorido, para intentar hacerme un desayuno. No era mucho: dos huevos revueltos, dos tostadas y un jugo de naranja. Pero cada intento de cocinar me hacía extrañar más la comida casera, esa que te hacen sin que lo pidas, con cariño, y que reconforta más allá del hambre.</p>
            <p>Luego venía la clase virtual. Ahí estaba yo, frente a la pantalla, tratando de concentrarme mientras mi mente vagaba entre el dolor físico y la nostalgia. Me sentía dividida entre dos mundos: el de la universidad, que recién empezaba a conocer, y el de mi hogar en Cartagena, donde sabía que mis padres estarían preocupados por mí.</p>
            <p>Me preguntaba constantemente cómo estarían ellos, cómo llevarían la cuarentena, y si también pensaban en cómo me las arreglaba sola.</p>
            <p>Las clases en línea eran una rutina nueva para todos, pero para mí, era como una doble adaptación: al principio me despertaba cada mañana, me preparaba como si fuera a una clase presencial, pero al prender el computador, la realidad se sentía fría y distante. Luego pasé a escucharle la voz a mis profesores en pijama y hasta incluso, acostada en mi cama. </p>
            <p>Las situaciones extrañas no cesaban, ni virtual, ni presencialmente.</p>
            <p>No solo estaba aprendiendo sobre mi carrera, sino también sobre cómo sobrevivir en una ciudad extraña durante una crisis de salud mundial. Me faltaba ese beso en la frente que recarga y esa mirada de un familiar que te dice que todo estará bien. Sin embargo, en esos momentos aprendí a encontrar pequeñas victorias en lo cotidiano: poder levantarme, hacer mi desayuno, conectarme a clase, y sentir que, aunque no todo estaba bien, estaba avanzando.</p>
            <p>Era un reto diario. A veces, me invadía la sensación de estar en automático, solo cumpliendo con lo que debía hacer. Otras veces, sentía que mi cuerpo pedía un descanso, pero el hecho de sentirme independiente me obligaba a seguir adelante. </p>
            <p>En el fondo, lo que más me pesaba no era la rutina ni el dolor físico, sino la ausencia de las cosas que no podía tener en ese momento: el calor del hogar, la presencia de un ser de cuatro patas, el sabor de la comida de mi mamá, y la simple tranquilidad de sentir que, pase lo que pase, estás con quienes te quieren.</p>
            <p>Medellín, con todo y su poco encanto que podía apreciar desde la ventana y el balcón del apartamento, me enseñaba una lección dura, pero valiosa. No solo era la ciudad donde empezaría a formarme como profesional, sino también el lugar que me estaba moldeando en lo personal. </p>
            <p>Aprendí que la distancia pesa, y que a veces, ser fuerte no es una opción, sino una necesidad. Las semanas pasaron, y aunque el dolor físico fue disminuyendo, la sensación de soledad quedó ahí, como una cicatriz que me recordaba lo lejos que estaba de casa.</p>
          </div>
        );
      case 'process':
        return (
          <div className={styles.sectionContent}>
            <h2>“La tierra que te forma no es la misma que te hace crecer”</h2>
            <p>María Camila Pérez Sepúlveda, estudiante de mercadeo de 24 años, decidió trasladarse en el año 2021 a Medellín para estudiar en la Universidad EAFIT, una elección que le ha permitido ampliar sus horizontes, aunque no sin el inevitable sentimiento de nostalgia por lo que dejó atrás. </p>
            <p>Antes de mudarse, María Camila vivía en el barrio Getsemaní, cerca del centro de Cartagena, un sector pequeño y lleno de historia. Su vida en la costa era, como ella dice, “casi un sueño hecho realidad”. Recuerda cómo los sábados en la mañana salía por una arepa de huevo en la esquina de su casa y se sentaba en la mecedora junto a la puerta, mirando a la gente pasar mientras el aire fresco de la mañana que poco a poco se iba convirtiendo en el fogaje del medio día.</p>
            <p>Sus recuerdos de Getsemaní están llenos de detalles de una vida que describen el encanto y la tranquilidad de su ciudad natal.</p>
            <p>A los 14 años, era una joven alegre, extrovertida y, como dirían en Cartagena, “andundera”. En las fiestas de noviembre (fiestas de independencia de Cartagena) la encontraban siempre en las calles, cubierta de maicena, y cantando a todo timbal las canciones de su tierra que retumban los odios con las canciones y el sonido de los buscapiés.</p>
            <p>Aun siendo una persona tan apegada a la vida folclórica de Cartagena, siempre fue consciente de que, si quería mejores oportunidades de estudio y carrera, tendría que salir de su zona de confort. Con tristeza, se dio cuenta de que la educación superior en su ciudad no contaba con las especialidades ni la calidad que ella buscaba para su futuro.</p>
            <p>Al llegar a Medellín, ve una ciudad con un ambiente distinto a Cartagena: el calor no azotaba, sino que acurrucaba la verdosidad de la ciudad, se puede recorrer gran parte de la ciudad sin gastarse una millonada y el concepto de belleza en la zona urbana es totalmente diferente al que veía en su cotidianidad.</p>
            <p>María Camila se enfrentó a una mezcla de emociones. Temía no encontrar el mismo calor humano al que estaba acostumbrada en la Costa, y se preguntaba si alguna vez llegaría a sentirse como en casa o transformas un nuevo espacio como hogar. </p>
            <p>Sin embargo, esa incertidumbre se disipó en sus primeros días en la universidad. Allí encontró un grupo de amigos que hoy en día considera una familia. Este apoyo fue clave para que su experiencia universitaria se transformara en una etapa llena de crecimiento y oportunidades, y no en una prueba de distancia o desarraigo.</p>
            <p>Desde el inicio, María Camila aprovechó cada oportunidad para regresar a Cartagena durante sus vacaciones. Aunque se adaptó a Medellín, la conexión con su familia y sus raíces siempre fue una prioridad. </p>
            <p>Admite que regresar de manera definitiva es algo que difícilmente sucederá en el futuro inmediato, y no porque haya dejado de amar su ciudad. Es una cuestión de realidad: las opciones académicas y laborales en Cartagena no le ofrecen el enfoque y las posibilidades que ella ha encontrado en Medellín.</p>
            <p>La educación que ha recibido en la Universidad EAFIT y las prácticas que ha realizado en una reconocida empresa le han permitido enfocarse en la planeación de mercado, un área en la que siempre soñó trabajar. </p>
            <p>Hoy, está terminando su carrera con la satisfacción de haber tomado una decisión difícil pero acertada. Está orgullosa de haber enfrentado el reto de mudarse y de dejar atrás una vida cómoda en su ciudad natal para construir un futuro profesional con mejores oportunidades.</p>
            <p>Perez sigue ligada a Cartagena, pero sabe que las posibilidades de desarrollo profesional en su ciudad son limitadas en comparación con Medellín. Aunque le gustaría regresar algún día, tiene claro que lo hará solo si encuentra una oferta laboral que le permita crecer de la misma manera que lo haría en Medellín. </p>
            <p>“No es fácil ver cómo Cartagena, con toda su belleza y potencial, aún no tiene la infraestructura o la oferta profesional en muchas áreas”, comenta. </p>
            <p>Mientras se prepara para culminar su vida universitaria, María Camila se plantea una especialización en mercadeo. Si todo sale como planea, continuará su trayectoria profesional. Aunque Cartagena sigue siendo un destino cuyo significado parte de sus raíces, Medellín le ha dado las herramientas para moldear su carrera y avanzar hacia el futuro que había planeado.</p>
          </div>
        );
      case 'adapted':
        return (
          <div className={styles.sectionContent}>
            <h2>Un cartagenero que ya se adaptó: </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={sebastian} style={{ maxWidth: '100%', height: 'auto' }} alt="Retos" />
            </div>
            <h3>“Después de diez años, me siento parte de Medellín”</h3>
            <p>Sebastián Andrés Barrios es un hombre de 27 años de Cartagena, que en el año 2015 decidió mudarse a Medellín como destino para ejercer su vida universitaria como administrador de empresa. Se especializó en gerencia de proyectos y actualmente cuenta con un café en la ciudad, en conjunto con sus amigos y, al mismo tiempo, trabaja en la librería Bukz como analista de datos. El empresario nos cuenta cómo ha sido su experiencia dentro de esta travesía, la cual trajo consigo resultados positivos más allá de lo académico. </p>
            <p>Uno de los mayores retos que enfrentó al mudarse y que todavía le cuesta aceptar, son los domingos en familia y los sabores de la comida típica y casera caribeña.</p>
            <p>Las ganas que tenía por establecerse y comenzar una nueva etapa de la vida en Medellín, hicieron que no fuera un momento tan difícil, sino más bien, pensó en aquellas cosas que le iba a otorgar la situación como tener la posibilidad de estudiar lo que le apasiona, la oportunidad y el privilegio de hacerlo en la universidad que quería.</p>
            <p>Eso, en conjunto con abrirse a una cultura que se asemeja con lo que quiere para el futuro (un territorio que lo incita a crear, innovar y superarse), conocer personas y encontrarse ante un espacio desconocido. </p>
            <p>La imagen de la ciudad le despertó curiosidad y atracción, principalmente por la calidad de vida, y el ambiente distinto que podía vivir en cada uno de los espacios que lo rodearían. Medellín, al ser un territorio cálido no solo por su clima, tenía grandes posibilidades de ofrecerle mejores experiencias en cuanto lo académico, laboral, ocio y crecimiento personal.</p>
            <p>"Cuando llegué a Medellín, esperaba encontrar una ciudad pujante y llena de oportunidades, pero también una gran competencia. Venía con la idea de que los paisas eran muy trabajadores y que habría que adaptarse a un ritmo mucho más acelerado que el de Cartagena". </p>
            <p>Confiesa que esas expectativas también venían acompañadas de inseguridades personales: "Temía no poder encajar del todo, no conocer a nadie y tener que demostrarme lo que soy en un entorno donde no era conocido.”</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={familia} style={{ maxWidth: '100%', height: 'auto' }} alt="Retos" />
            </div>
            <p>Sebastián con su familia en Cartagena</p>
            <br />
            <h3>Una mirada diferente de su ciudad </h3>
            <p>Cartagena siempre le va a despertar nostalgia y sentimiento al visitarla. No obstante, con el pasar de los años se ha dado cuenta que su lugar de origen es un sitio complicado de habitar y que, al igual que los turistas, este solo se ha convertido en una ciudad maravillosa solo para visitarla de vez en cuando.</p>
            <p>Al irse, analizó que la ciudad no evoluciona, carece de un avance en infraestructura, es caótica, desordenada y se encuentra bastante sectorizada, tanto así que el viajero y hasta algunos ciudadanos no conocen siquiera un pequeño porcentaje de la zona sur, porque la mirada y el entretenimiento se da en el centro y sus alrededores.</p>
            <p>La brecha social es significante, nunca ha visto un barrio popular en Medellín que se asemeje al estado de muchos hogares en sectores donde las condiciones de vivienda son tan precarias. </p>
            <p>Es por esto que son más los sentimientos negativos que positivos, aunque quisiera que fuese lo contrario, ya que al no tenerlos le causa conflicto porque es consciente del potencial que tiene Cartagena. </p>
            <p>Si se comenzara por intentar disminuir uno de los mayores problemas, que es la falta de sentido de pertenencia, La Heroica lograría ofrecerle un mejor espacio no solo a quien viene de paso.</p>
            <p>Aún lleva en su cotidianidad la jerga cartagenera, y es un poco relajado, en cuanto a no estresarse por los desafíos que se le presenten en la vida.</p>
            <p>Cada que la visita, no pierde la oportunidad de traer una maleta de 25 kilos llena de comida costeña: arroz de coco, carne en posta, queso costeño, mojarra, deditos, y demás especialidades bañadas con la sazón de su casa. </p>
            <p>Gracias a que Cartagena tiene un alto nivel en la comida rápida, al probar la de Medellín, al igual que muchos costeños, siente un don para afirmar si el plato pasa la prueba o no.</p>
            <p>Ya que lleva 10 años viviendo en la ciudad de la eterna primavera, se contagió de las ganas de emprender, mayor sentido de pertenencia, cambió su forma de vestir adaptándose a algo más único y en su lista de géneros musicales agregó la electrónica y la música popular.</p>
            <p>"El sentido del trabajo en equipo, el orgullo por lo que haces y el enfoque hacia el emprendimiento son aspectos que Medellín me regaló. Antes era más tímido y reservado, pero la cultura paisa me ha enseñado a ser más abierto y a creer más en mis capacidades”, comenta Barrios.</p>
            <br />
            <h3>Adaptación y nuevas realidades</h3>
            <p>Un proceso de adaptación se facilita no solo por la forma en la que lo acogen, sino en la que uno se incluye. Él al ser una persona en la mayoría del tiempo introvertida, en el aspecto social no la tuvo sencilla desde un inicio. Sin embargo, al ir entendiéndose y acogiéndose a los planes que lo rodearían de sus nuevos cercanos, pudo encontrar en los paisas redes de apoyo y amistades sinceras.</p>
            <p>Barrios también agrega de la ciudad que “su sentido de comunidad es muy fuerte, y eso me facilitó la adaptación, tanto en lo personal como en lo profesional".</p>
            <p>El haber sido una persona que comenzó su vida en otro lugar le ayuda a empatizar más, comprender distintas realidades, ser agradecido con la propia, amar y agradecer los momentos de soledad y de compañía. Aprendió que el acto de vivir no es solo estar vivo, sino sentirse vivo. </p>
            <p>Su presente cambia en cuanto logra darse cuenta que tiene la posibilidad de ser una persona nueva, aquella que tal vez al estar en una ciudad tan conservadora y que la caracterice el “¿qué dirán?”, imposibilita en cierta parte ser un ser 100% auténtico.</p>
            <p>“No conocía mucho de la ciudad ni de su gente, pero ahora, después de diez años, me siento parte de Medellín. Haberme especializado y trabajar como socio en un café me ha dado una visión más clara de mis habilidades. Antes, era mucho más dependiente de mi entorno, ahora soy más autónomo y me siento empoderado en mi rol dentro de la sociedad”, expresa el joven empresario.</p>
            <p>El ser estudiante foráneo trae consigo varios desafíos. Entre ellos el no poder visitar el hogar con tanta facilidad, la adaptación de los nuevos hábitos que en la cotidianidad no se ejercían, ubicarse en un territorio nuevo, desenvolverse solo, encontrar un grupo social, adaptarse y entender el vocabulario local.</p>
            <p>“En Cartagena siempre tenía a mi familia o amigos de la infancia cerca, pero aquí, me enfrenté a días en los que no tenía con quién hablar y mi única compañía eran los juegos del computador”, señala Barrios.</p>
            <br />
            <h3>Entre Cartagena y Medellín…</h3>
            <p>Las dos al ser unas ciudades altamente turísticas cuenta con una mezcla de culturas que son espacios abiertos a la diversidad. Se diferencian en los métodos pedagógicos, las universidades de la Costa no se han adaptado en su mayoría a la forma de aprendizaje de los estudiantes hoy en día. Existe algo sociológico y antropológico 	diferente.</p>
            <p>La relación entre cartageneros y paisas, en su experiencia, fue interesante porque parte de diferencias culturales muy marcadas. En general, siente que ambos grupos se respetan mucho, pero hay estereotipos que a veces complican la forma en que la que se perciben mutuamente. </p>
            <p>Los cartageneros son conocidos por ser relajados, tranquilos, con una forma de vivir más calmada, mientras que los paisas tienen la fama de ser muy trabajadores, siempre ocupados, y con un enfoque muy directo hacia los negocios. Eso puede generar malentendidos, especialmente cuando se llega nuevo a Medellín.</p>
            <p>Un malentendido común es que, por ser cartageneros, algunos piensan que no son tan comprometidos o responsables, como si el hecho de ser relajados significara que no se tomaran las cosas tan en serio. Pero al convivir y trabajar juntos, esas percepciones cambian.</p>
            <p>“Yo, por ejemplo, en la empresa donde trabajo, ya me he ganado el respeto tanto de mis compañeros como de mis jefes porque también soy muy trabajador y comprometido, solo que mi manera de llevar las cosas puede ser diferente”, sostiene Sebastián Barrios.</p>
            <p>También analiza que, al final, cree que tanto cartageneros como paisas aportan cosas valiosas. Los paisas enseñan sobre el trabajo duro y el espíritu empresarial, mientras que los cartageneros traen un poco de esa calidez caribeña, esa forma de disfrutar la vida sin tanto estrés. Ambos tienen cosas que aprender el uno del otro, y cuando se logra superar esos estereotipos, se crean relaciones muy fuertes y fructíferas.</p>
            <br />
            <h3>Lecciones acogidas</h3>
            <p>Viviendo en Medellín ha aprendido muchas cosas que, probablemente no habría descubierto si se hubiera quedado en Cartagena. Una las lecciones más grandes sería el valor de la independencia; en Cartagena, siempre estaba rodeado de la familia, amigos de toda la vida, y eso lo hacía sentir seguro.</p>
            <p>Pero al mudarse, le tocó salir de esa zona de confort y aprender a hacer las cosas por si mismo. Cosas simples como manejar sus finanzas, hacer mercado, resolver problemas del día a día o incluso enfrentar la soledad. Son experiencias que lo hicieron madurar hacia una vida más adulta.</p>
            <p>También aprendió el valor de adaptarse y ser flexible “Al principio fue difícil, porque las costumbres, el clima, hasta la comida, eran muy diferentes a lo que estaba acostumbrado. Pero aprendí que, para crecer, uno tiene que saber adaptarse a lo nuevo, y Medellín me enseñó a abrir mi mente y a ser más tolerante con las diferencias. Antes era más cerrado a probar cosas nuevas, pero aquí he aprendido a disfrutar de lo desconocido y a ver los cambios como oportunidades, no como problemas”.</p>
            <p>La lección más importante ha sido descubrir su propia capacidad para reinventarse. Llegó siendo una persona tímida, con muchos miedos, pero vivir en Medellín ayudó a salirse de aquella burbuja y descubrir habilidades y talentos que no sabía que tenía. </p>
            <p>“Cartagena siempre será mi hogar, pero Medellín me ha enseñado que puedo lograr muchas cosas desde la disciplina y el atrevimiento. Esa es una lección que me recuerda esta ciudad cada día”, resalta Barrios.</p>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <img src={rana1} style={{ maxWidth: '100%', height: 'auto' }} alt="Retos" />
              <img src={rana2} style={{ maxWidth: '100%', height: 'auto' }} alt="Retos" />
            </div>
            <p>Sebastián en el café Rana Brava </p>
          </div>
        );
      case 'tips':
        return (
          <div className={styles.sectionContent}>
            <h2>¿Cómo adaptarse a ser foráneo en Medellín y no morir en el intento (versión costeña)?</h2>
            <ol>
              <li>Prepárate para el arte de explicar tus costumbres: En cada reunión o paseo, te harán preguntas sobre Cartagena y la costa. Úsalo como tu carta de presentación: cuenta historias de Carnaval, de playa, de comida, y de paso, demuéstrales que ser costeño es más que sólo amor por el mar.</li>
              <li>Desarrolla un radar para identificar otros costeños en Medellín: Es un don único, como un sexto sentido. Detectarás costeños a la distancia solo por sus frases, su sonrisa fácil y la forma en que se mueven. ¡Alíate con ellos y forma tu pequeña comunidad!</li>
              <li>Acepta que la prisa es relativa: En la costa, el tiempo es flexible, pero aquí parece que cada segundo cuenta. Acepta el cambio sin frustrarte; el reloj avanza rápido en Medellín, y al principio te parecerá abrumador, pero pronto encontrarás tu propio ritmo.</li>
              <li>Defiende tu acento (sin exagerarlo): Aquí todos notarán tu acento costeño, y aunque al principio te dará curiosidad adaptarte al tono paisa, tu acento es parte de ti. Mantén tus raíces, disfruta de tus “oye” y “ajá”, porque, al final, ser costeño es un orgullo que se lleva en el pecho, sin importar dónde estés.</li>
              <li>Tómate el aguardiente con respeto: No subestimes su poder; mejor anda despacio y disfrútalo como un ritual local.</li>
              <li>Adapta tus recetas, pero no pierdas tu sazón: Puede que la arepa paisa nunca compita con la de huevo, pero aprender a preparar tu propia comida costeña en Medellín es un arte. Domina el arte de encontrar yuca, plátano y coco para tus sagrados patacones y arroces, y mantén tu sazón costeña en cada plato.</li>
            </ol>
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