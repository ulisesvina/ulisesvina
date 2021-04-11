import { NavLink } from "react-router-dom";
import logo from '../static/img/logo.svg';

const Header = () => {
  return (
    <div className="main">
      <header className="Main-header">
        <nav className="navbar navbar-expand-lg container navbar-light">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} className="img-fluid" width="60" alt="logo"/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapseElem" aria-controls="navbarCollapseElem" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapseElem">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/">Inicio</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/intro">Presentación</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contacto</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/projects">Proyectos</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;