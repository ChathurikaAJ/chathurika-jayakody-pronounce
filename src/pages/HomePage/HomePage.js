import {Link} from 'react-router-dom';
import welcomeImage from '../../assets/images/welcome.jpeg'
import './HomePage.scss'

export default function HomePage(){
    return(
        <div>
            <img className='hero'src={welcomeImage}/>
            <main className='language'>
                <Link to='/language/english'><p className='language__name'>English</p></Link>  
                <Link to='/language/french'><p className='language__name'>French</p></Link> 
                <Link to='/language/spanish'><p className='language__name'>Spanish</p></Link> 
                <Link to='/language/chinese'><p className='language__name'>Chinese</p></Link>
            </main>
        </div>
        
)
}