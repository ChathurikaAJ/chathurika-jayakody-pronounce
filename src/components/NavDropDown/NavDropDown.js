import './NavDropDown.scss'
import { Link } from "react-router-dom";

export default function NavDropDown (){
    return(
        <ul className='nav__list'>
            <Link to='/language/chinese'><li className='nav__list-item'>Chinese</li></Link>
            <Link to='/language/english'><li className='nav__list-item'>English</li></Link>
            <Link to='/language/french'><li className='nav__list-item'>French</li></Link>
            <Link to='/language/spanish'><li className='nav__list-item'>Spanish</li></Link>
        </ul>

    )
}