import './SyllableCard.scss'

export default function ({syllabe,score}){
    return(
        <div className='word-card__syllable-box'>
            <p className='word-card__syllable-box-text'>{syllabe}</p>
            <p className='word-card__syllable-box-text'>{score}</p>
        </div>
    )
}