import './NavDropDown.scss'
import { Link } from "react-router-dom";

export default function NavDropDown (){
    return(
        <ul>
            <Link to='/language/chinese'><li>Chinese</li></Link>
            <Link to='/language/english'><li>English</li></Link>
            <Link to='/language/french'><li>French</li></Link>
            <Link to='/language/spanish'><li>Spanish</li></Link>
        </ul>

    )
}