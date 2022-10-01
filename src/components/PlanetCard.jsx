import React from 'react'

function PlanetCard({planetName, planetImage}) {
  return (
    <section className="PlanetCard" data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <div>
          <img
            className={ `Image-${planetName}` }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </div>
      </section>
  )
}

export default PlanetCard
