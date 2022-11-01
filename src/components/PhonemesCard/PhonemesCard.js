import './PhonemesCard.scss'
import {  useState } from 'react'

export default function PhonemesCard({phoneme,score}){


    return (
        <div className='word-card__phonemes-box'>
            <p>{phoneme}</p>
            <p>{score}</p>
        </div>
    )
}