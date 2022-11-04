import hero from '../../assets/images/hero.jpeg'
import Details from '../../components/Details/Details';
import './HomePage.scss'
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';



export default function HomePage(){
    return(
        <div>
            <div className='hero'>
                <img className='hero__image'src={hero}/>
            </div>
            <main className='language'>
                <h1 className='language__title'>Improve language fluency</h1>
                <h2 className='language__sub-title'>Select a language to get started</h2>
                <div className='language__list'>
                    <Link className='language__list-link' to='/language/english'><p className='language__list-name'>English</p></Link>  
                    <Link className='language__list-link' to='/language/french'><p className='language__list-name'>French</p></Link> 
                    <Link className='language__list-link' to='/language/spanish'><p className='language__list-name'>Spanish</p></Link> 
                    <Link className='language__list-link' to='/language/chinese'><p className='language__list-name'>Chinese</p></Link>
                </div>
                <Details />
                {/* <Footer /> */}
            </main>
        </div>
        
)
}