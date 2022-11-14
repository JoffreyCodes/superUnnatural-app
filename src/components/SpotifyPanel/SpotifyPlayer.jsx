import React from 'react'

function SpotifyPlayer(props) {
    if (props.trackClick === undefined) {
        return
    }
    return (    
        <>
            <iframe
                id="spotifyPlayerId"
                title="sp"
                style={{"borderRadius":"12px"}}
                src={`https://open.spotify.com/embed/track/${props.trackClick}?utm_source=generator`}                
                width="90%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </>
    )
}

export default SpotifyPlayer