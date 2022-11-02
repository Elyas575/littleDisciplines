import React from 'react'
import DisciplineItem from './DisciplineItem'

function disciplineList(props) {
  return (
    <div>
      {props.dis.map( (object) => {
        return <DisciplineItem id={object.id} title={object.title} startTime={object.startTime} finishTime={object.finishTime} img={object.img} description={object.description}/>
      })}
    </div>
  )
}

export default disciplineList
