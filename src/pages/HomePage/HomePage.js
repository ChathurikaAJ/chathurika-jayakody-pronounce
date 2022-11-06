import hero from '../../assets/images/hero.jpeg'
import Details from '../../components/Details/Details';
import './HomePage.scss'
import {Link} from 'react-router-dom';


export default function HomePage(){
    return(
        <div className='home'>
            <div className='home__hero'>
                <img className='home__hero-image'src={hero}/>
            </div>
            <main className='home__languages'>
                <h1 className='home__languages-title'>Improve language fluency</h1>
                <h2 className='home__languages-sub-title'>Select a language to get started</h2>
                <div className='home__languages-list'>
                    <Link className='home__languages-list-link' to='/language/english'><p className='home__languages-list-name'>English</p></Link>  
                    <Link className='home__languages-list-link' to='/language/french'><p className='home__languages-list-name'>French</p></Link> 
                    <Link className='home__languages-list-link' to='/language/spanish'><p className='home__languages-list-name'>Spanish</p></Link> 
                    <Link className='home__languages-list-link' to='/language/chinese'><p className='home__languages-list-name'>Chinese</p></Link>
                </div>
                <Details />
            </main>
        </div>
        
)
}