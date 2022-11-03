import React, { useState, useEffect } from 'react'
import {RiHeartAddLine, RiHeartFill} from  'react-icons/ri'
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
    return (
        <div className="heart-container" onClick={handleCheckboxClick}>
            { isSaved ?
                <RiHeartFill className="heart filled" size='3em' color={bgColor} />
            :
                <RiHeartAddLine className="heart unfilled" size='3em' />
            }
        </div>
        )
}

export default Heartbox
