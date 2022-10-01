import React from 'react'
import Title from './Title'
import missions from '../data/missions';
import MissionsCard from './MissionsCard';
function Missions() {
  return (
    <section className="Missions">
      <Title title="Missions" />
      <div className="Missions-list">
        {
          missions.map((mission) => (
            <MissionsCard
              key={mission.name}
              name={mission.name}
              year={mission.year}
              country={mission.country}
              destination={mission.destination}
            />
          ))
        }
      </div>

    </section>
  )
}

export default Missions
