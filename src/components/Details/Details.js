import './Details.scss'
import hear from '../../assets/images/hear.jpg'
import speak from '../../assets/images/speak.jpg'
import write from '../../assets/images/write.jpg'
import result from '../../assets/images/result.jpg'

export default function Details(){
    return(
        <div className='home__details'>
            <h2>How it works</h2>
            <div className='home__details-section'>
                <div className='home__details-container'>
                    <img className='home__details-image' src={write}/>
                    <p className='home__details-text'>Type the word or sentence you want to practice</p>
                </div>
                <div className='home__details-container'>
                    <img className='home__details-image' src={hear}/>
                    <p className='home__details-text'>Listen to a sample audio for reference</p>
                </div>
                <div className='home__details-container'>
                    <img className='home__details-image' src={speak}/>
                    <p className='home__details-text'>Record yourself</p>
                </div>
                <div className='home__details-container'>
                    <img className='home__details-image' src={result}/>
                    <p className='home__details-text'>Get a detailed assessment on your pronounciation</p>
                    
                </div>
            </div>
            
        </div>
    )
}