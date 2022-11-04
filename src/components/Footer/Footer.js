import './Footer.scss'
import ballon from '../../assets/images/ballon.png'

export default function Footer(){
    return(
        <div className='footer'>
            <img className='footer__image' src={ballon}/>
            {/* <p className='footer__text'>Have Fun</p> */}
        </div>
    )
}