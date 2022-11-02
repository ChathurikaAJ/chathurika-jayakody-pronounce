import "./Navigation.scss";
import { Link } from "react-router-dom";
import NavDropDown from "../NavDropDown/NavDropDown";
import { useState } from "react";
import logo from '../../assets/logo/logo.png'

export default function () {
  const [showList, setShowList] = useState(false);

  const onMoveEnter = () => {
    setShowList(true);
  };

  const onMoveLeave = () => {
    setShowList(false);
  };

  return (
    <div className="nav">
      <Link to="/">
        <img className="nav__logo" src={logo}/>
      </Link>

      <div className="nav__titles">
        <Link to="/">
          <p  className="nav__titles-home">Home</p>
        </Link>
        <div onMouseEnter={onMoveEnter} onMouseLeave={onMoveLeave} className="nav__titles-languages">
          <p>Languages</p>
          {showList && <NavDropDown />}
        </div>
      </div>
    </div>
  );
}
