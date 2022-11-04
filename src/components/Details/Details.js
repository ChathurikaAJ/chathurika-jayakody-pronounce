import './Details.scss'
import hear from '../../assets/images/hear.jpg'
import speak from '../../assets/images/speak.jpg'
import write from '../../assets/images/write.jpg'
import result from '../../assets/images/result.jpg'

export default function Details(){
    return(
        <div className='details'>
            <h2>How it works</h2>
            <div className='details__container'>
                <img className='details__image' src={write}/>
                <p className='details__text'>Type the word or sentence you want to practice</p>
            </div>
            <div className='details__container'>
                <img className='details__image' src={hear}/>
                <p className='details__text'>Listen to a sample audio for reference</p>
            </div>
            <div className='details__container'>
                <img className='details__image' src={speak}/>
                <p className='details__text'>Record yourself</p>
            </div>
            <div className='details__container'>
                <img className='details__image' src={result}/>
                <p className='details__text'>Get a detailed assessment on your pronounciation</p>
                
            </div>
            
        </div>
    )
}