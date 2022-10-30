import {Link} from 'react-router-dom';
import welcomeImage from '../../assets/images/welcome.jpeg'
import './HomePage.scss'

export default function HomePage(){
    return(
        <div>
            <img className='hero'src={welcomeImage}/>
            <main className='main'>
                <Link to='/language/english'><p>English</p></Link>  
                <Link to='/language/french'><p>French</p></Link> 
                <Link to='/language/spanish'><p>Spanish</p></Link> 
                <Link to='/language/chinese'><p>Chinese</p></Link>
            </main>
        </div>
        
)
}