import {Link} from 'react-router-dom';
import welcomeImage from '../../assets/images/welcome.jpeg'
import './HomePage.scss'

export default function HomePage(){
    return(
        <div>
            <img className='hero'src={welcomeImage}/>
            <main className='language'>
                <h1 className='language__title'>Select a language</h1>
                <div className='language__list'>
                    <Link to='/language/english'><p className='language__list-name'>English</p></Link>  
                    <Link to='/language/french'><p className='language__list-name'>French</p></Link> 
                    <Link to='/language/spanish'><p className='language__list-name'>Spanish</p></Link> 
                    <Link to='/language/chinese'><p className='language__list-name'>Chinese</p></Link>
                </div>
                
            </main>
        </div>
        
)
}