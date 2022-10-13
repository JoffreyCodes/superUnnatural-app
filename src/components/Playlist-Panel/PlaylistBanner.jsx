import React from 'react'

function PlaylistBanner(props) {
    const date = props.workout.lastPlayed
    const parsedDate = new Date(Date.parse(date))
    const showDate = `${parsedDate.getMonth() + 1}.${parsedDate.getDate()}`
    console.log(props)
    return (
        <div className={`row playlist banner pl-${props.plId}`} id={props.trackListData.id}>
            {props.trackListDataLoaded ?
                <>                    
                    <div className="banner info container">
                        <div className="banner row title">
                            <strong>{props.workout.title}</strong>
                        </div>
                        <div className="banner row info">
                            {showDate}
                        </div>
                        <div className="banner row info">
                            {props.workout.workoutType}
                        </div>
                    </div>


                    <img className="img banner" id={`img-${props.trackListData.id}`}
                        src={props.trackListData.images[0].url}
                        alt={props.trackListData.title}
                    />
                </>
                : "loading..."}
        </div>      
    )
}

export default PlaylistBanner