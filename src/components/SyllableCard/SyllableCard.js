import './SyllableCard.scss'
import {  useEffect, useState } from 'react'

export default function ({syllabe,score}){

    const [lowScoreClass, setLowScoreClass] = useState('')

    useEffect(()=>{
        if(score <= 60){
            setLowScoreClass(', word-card__syllable-box-low')
        }
    },[])

    return(
        <div className={`word-card__syllable-box${lowScoreClass}`}>
            <p className='word-card__syllable-box-text'>{syllabe}</p>
            <p className='word-card__syllable-box-text'>{score}</p>
        </div>
    )
}