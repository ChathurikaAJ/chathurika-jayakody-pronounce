import './Hero.scss'
import welcomeImage from '../../assets/images/welcome.jpeg'

export default function(){
    return(
        <div>
            <img className='hero'src={welcomeImage}/>
        </div>
    )
}