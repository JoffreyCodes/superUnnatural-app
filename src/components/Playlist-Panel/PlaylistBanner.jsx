import React from 'react'

function PlaylistBanner(props) {
    return (
        <div className='row playlist banner'>
            
            {/* <h1 className='playlist title name'>{props.trackListData.name}</h1> */}

            {props.trackListDataLoaded ?
                <img className="sn-playlist"
                    src={props.trackListData.images[0].url}
                    alt={props.trackListData.title}
                />
                : "loading..."}
        </div>      
    )
}

export default PlaylistBanner