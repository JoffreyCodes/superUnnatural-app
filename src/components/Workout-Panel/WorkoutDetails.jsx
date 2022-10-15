import React from 'react'
import { TbSwords} from 'react-icons/tb'
import {GiBoxingGloveSurprise} from 'react-icons/gi'
function WorkoutDetails(props) {
    const info = props.info
    const type = () => {
        if (info.type === 'classic') {
            return (<TbSwords size='2em'/>)
        } else if (info.type === 'boxing'){
            return (<GiBoxingGloveSurprise size='2em'/>)
        }else{
            return('other')
        }       
    }
    return (
        <div className="workout-details-container">          
            <div className="workout-detail">
                <strong>type</strong>
                <div className='type-icon'>{type()}</div>
            </div>
            <div className="workout-detail">
                <strong>duration</strong>
                <div>{info.duration}</div>
            </div>
            <div className="workout-detail">
                <strong>intensity</strong>
                <div>{info.intensity}</div>
            </div>
        </div>
    )
}

export default WorkoutDetails