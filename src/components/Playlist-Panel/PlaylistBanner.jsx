import React from 'react'

function PlaylistBanner(props) {
    const date = props.workout.lastPlayed
    const parsedDate = new Date(Date.parse(date))
    const showDate = `${parsedDate.getMonth() + 1}.${parsedDate.getDate()}`
    return (
        <div className='row playlist banner'>
            {props.trackListDataLoaded ?
                <>
                    <h1>{props.workout.title}</h1>
                    <h4>{showDate}</h4>
                    <h4>{props.workout.workoutType}</h4>
                    

                    <img hidden id={`img-${props.trackListData.id}`}
                        src={props.trackListData.images[0].url}
                        alt={props.trackListData.title}
                    />
                </>
                : "loading..."}
        </div>      
    )
}

export default PlaylistBanner