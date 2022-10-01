import React from 'react'
import Title from './Title'
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
function SolarSystem() {
  return (
    <section className="SolarSystem">
      <Title title="Planets"/>
      <div className="SolarSystem-planetsContainer">
        {
          Planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              planetName={planet.name}
              planetImage={planet.image}
            />
          ))
        }
      </div>
    </section>
  )
}

export default SolarSystem
