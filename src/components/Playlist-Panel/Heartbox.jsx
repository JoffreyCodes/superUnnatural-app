import React, { useState, useEffect }from 'react'
import { UserAddTrackToSave, UserDelTrackToSave } from '../../utils/FetchSpotifyAPI'
import { FetchSpAlbumColor } from '../../utils/FetchAPI'

function Heartbox(props) {
    const [isSaved, setIsSaved] = useState(props.trackObj.user_saved)
    const [stateChange, setStateChange] = useState(0)
    const [bgColor, setBgColor] = useState('#858585')


    const handleCheckboxClick = () => {
        setIsSaved(!isSaved)
        setStateChange(stateChange + 1)
    }
    useEffect(() => {
        function addOrRemoveTrackFromSpotify() {      
        try {
            if (isSaved && stateChange) {
                UserAddTrackToSave(props.id)  
            } else if (!isSaved && stateChange) {
                UserDelTrackToSave(props.id)          
            }  
        } catch (error) {
            console.log(error)
            window.location.replace('/')
        }
    }
        addOrRemoveTrackFromSpotify(isSaved)
    }, [isSaved, props.id, stateChange])
    
    useEffect(() => {
        if (isSaved) {
            const getBgColor = async () => {
            try {
                const bgColorData = await FetchSpAlbumColor(props.id)  
                setBgColor(bgColorData.data.color)
            } catch (error) {
                console.log(error)
            }
        }
        getBgColor()
        }    
    }, [isSaved, bgColor, props.id])
    
    const styleObj =
    {
        color: bgColor
    }
    return (
        <>
            { isSaved ?
                <h1
                    className="heart save filled"
                    onClick={handleCheckboxClick}
                    style={styleObj}
                >
                    ♥
                </h1>
            :
            <h1 className="heart save unfilled" onClick={handleCheckboxClick}>♡</h1>
            }
        </>
        )
}

export default Heartbox
