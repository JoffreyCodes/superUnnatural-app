import React from 'react'
import { TbSwords} from 'react-icons/tb'
import {GiBoxingGlove} from 'react-icons/gi'
function WorkoutDetails(props) {
    const info = props.info
    const type = () => {
        if (info.type === 'classic') {
            return (<TbSwords size='2em'/>)
        } else if (info.type === 'boxing'){
            return (<GiBoxingGlove className="boxing-icon" size='2em'/>)
        }else{
            return('other')
        }       
    }

    const duration = Math.ceil(info.duration / 60)
    const intensity = (info) => {
        switch (info.intensity) {
            case 1:
                return <div className="text detail intensity rating low"> Low </div>
            case 2:
                return <div className="text detail intensity rating med"> Medium </div>
            case 3:
                return <div className="text detail intensity rating high"> High </div>
            default:
                return "na"
        }
        
    }

    return (
        <div className="workout-details-container">          
            <div className="workout-detail">
                <div className="text detail title">TYPE</div>
                <div className='type-icon'>{type()}</div>
            </div>
            <div className="workout-detail">
                <div className="text detail title">DURATION</div>
                <div className= "text detail duration">{duration} min</div>
            </div>
            <div className="workout-detail">
                <div className="text detail title">INTENSITY</div>
                    {intensity(info)}
            </div>
        </div>
    )
}

export default WorkoutDetails