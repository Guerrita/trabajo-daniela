import React, { useEffect, useRef, useState } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartStyles = {
  container: {
    width: '100%', 
    marginTop: '2rem',
    marginBottom: '2rem',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)'
  },
  sectionContainer: {
    marginBottom: '2rem'
  },
  lineChartContainer: {
    height: '400px', // Aumentado de 300px a 400px
    margin: '0 auto',
    marginBottom: '2rem' // Añadido margen inferior
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    marginTop: '2rem'
  },
  chartTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1rem'
  },
  pieChartContainer: {
    height: '300px',
    margin: '0 auto'
  },
  '@media (max-width: 768px)': {
    gridContainer: {
      gridTemplateColumns: '1fr'
    }
  }
};

const SurveyCharts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const returnData = [
    { name: "Prefieren quedarse en Medellín", value: 6 },
    { name: "Sí, pero no es seguro", value: 2 },
    { name: "No lo han considerado", value: 13 }
  ];

  const challengesData = [
    { name: "Adaptación cultural", value: 2 },
    { name: "Encontrar empleo", value: 0 },
    { name: "Encontrar grupo social", value: 4 },
    { name: "Lejanía de la familia", value: 15 }
  ];

  const motivationData = [
    { name: "Calidad de las universidades", estudiantes: 13 },
    { name: "Oportunidades laborales", estudiantes: 5 },
    { name: "Recomendación familiares/amigos", estudiantes: 2 },
    { name: "Otros", estudiantes: 1 }
  ];

  const COLORS = ['#FB8500', '#FFB703', '#780000', '#003049'];

  const getInitialData = (data) => {
    if (!shouldAnimate) {
      return data.map(item => ({...item, value: 0, estudiantes: 0}));
    }
    return data;
  };

  return (
    <div 
      ref={containerRef} 
      style={{
        ...ChartStyles.container,
        ...(isVisible ? ChartStyles.visible : {})
      }}
    >
      <div style={ChartStyles.sectionContainer}>
        <h3 style={ChartStyles.chartTitle}>¿Qué motivó a los estudiantes cartageneros para mudarse a Medellín?</h3>
        <div style={ChartStyles.lineChartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={getInitialData(motivationData)} 
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }} // Aumentado el margen inferior
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-60} 
                textAnchor="end" 
                interval={0}
                height={120} // Aumentado el height del eje X
                tick={{fontSize: 12}} // Ajustado el tamaño de la fuente
              />
              <YAxis domain={[0, 15]} /> {/* Establecido un dominio fijo */}
              <Tooltip />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Line 
                type="monotone" 
                dataKey="estudiantes" 
                stroke="#003049"
                animationBegin={0}
                animationDuration={2000}
                strokeWidth={2} // Línea más gruesa
                dot={{ strokeWidth: 2, r: 4 }} // Puntos más visibles
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={ChartStyles.gridContainer}>
        <div style={ChartStyles.sectionContainer}>
          <h3 style={ChartStyles.chartTitle}>¿Los estudiantes cartageneros consideran volver?</h3>
          <div style={ChartStyles.pieChartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={getInitialData(returnData)}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}`}
                  animationBegin={0}
                  animationDuration={4000}
                >
                  {returnData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={ChartStyles.sectionContainer}>
          <h3 style={ChartStyles.chartTitle}>Mayor reto de estudiantes cartageneros al mudarse a Medellín</h3>
          <div style={ChartStyles.pieChartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={getInitialData(challengesData)}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}`}
                  animationBegin={0}
                  animationDuration={4000}
                >
                  {challengesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCharts;