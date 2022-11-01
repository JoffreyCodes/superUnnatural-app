import React from 'react'

function SpotifyPlaylistPlayer(props) {
    return (    
        <>
            <iframe
                id="sp-playlist"
                title="sp-playlist"
                style={{"borderRadius":"12px"}}
                src={`https://open.spotify.com/embed/playlist/${props.selectedWorkout}?utm_source=generator`}
                width="90%"
                height="400"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">               
            </iframe>
        </>
    )
}

export default SpotifyPlaylistPlayer