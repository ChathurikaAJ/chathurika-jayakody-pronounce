import './SyllableCard.scss'

export default function ({syllabe,score}){
    return(
        <div className='word-card__syllable-box'>
            <p>{syllabe}</p>
            <p>{score}</p>
        </div>
    )
}