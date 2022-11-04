import './PhonemesCard.scss'
import {  useEffect, useState } from 'react'

export default function PhonemesCard({phoneme,score}){

    const [lowScoreClass, setLowScoreClass] = useState('')

    useEffect(()=>{
        if(score <= 60){
            setLowScoreClass(', word-card__phonemes-box-low')
        }
    },[])


    return (
        <div className={`word-card__phonemes-box${lowScoreClass}`}>
            <p>{phoneme}</p>
            <p>{score}</p>
        </div>
    )
}