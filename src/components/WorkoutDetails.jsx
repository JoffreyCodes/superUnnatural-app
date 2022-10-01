import React from 'react'

function WorkoutDetails(props) {

  return (
    <>
      {props.snDataLoaded ?
        props.snData.map((workout,key) => {
          return (<p key={key}>{workout.title}</p>)
        }) : "loading..."}

    </>
  )
}

export default WorkoutDetails