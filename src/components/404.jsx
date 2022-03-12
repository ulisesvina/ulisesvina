import { Component } from "react";
import { Link } from "wouter";

export default class NotFound extends Component {
    render() {
        return(
            <div className="center">
                <div className="mt-5">
                    <span className="big-text"><i><b>Error 404</b></i></span><br />
                </div>
                <div className="mt-3">
                    <h1>Página no encontrada</h1><br />
                </div>
                <Link href="/"><button className="mt-2 button-primary">Volver al inicio</button></Link>
            </div>
        )
    }
}