import {Link} from 'react-router-dom';

export default function HomePage(){
    return(
        <div>
            <p>Home Page</p>
            <Link to='/language/english'><p>English</p></Link>  
            <Link to='/language/french'><p>French</p></Link> 
            <Link to='/language/spanish'><p>Spanish</p></Link> 
            <Link to='/language/chinese'><p>Chinese</p></Link>
        </div>
        
)
}