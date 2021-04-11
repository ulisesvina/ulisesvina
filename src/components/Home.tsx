import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div id="main" className="container mt-5">
            <h3>Ulises Viña</h3>
            <h5 className="text-secondary">Diseñador Web</h5>
            <nav className="mt-3">
                <NavLink className="btn btn-primary" to="/projects">Proyectos</NavLink>
                <NavLink className="btn btn-secondary ms-2" to="/intro">Introducción</NavLink>
            </nav>
        </div>
    )
}

export default Main;