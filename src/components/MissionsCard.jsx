import React from 'react';
import '../style/Style.css'

function MissionsCard({name, year, country, destination}) {
  return (
    <section data-testid="mission-card" className="MissionCard">
        <header>
          <h3 data-testid="mission-name">{ name }</h3>
        </header>
        <div>
          <p data-testid="mission-year">{ year }</p>
          <p data-testid="mission-country">{ country }</p>
          <p data-testid="mission-destination">{ destination }</p>
        </div>
      </section>
  )
}

export default MissionsCard
