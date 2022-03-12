import { Component } from "react";
import { Link } from "wouter";
import '../css/Navbar.css';
import { IoIosMenu, IoMdHome, IoIosMail } from "react-icons/io";

export default class Navbar extends Component {
    constructor() {
        super();
        
        this.state = {
            activeNavbar: false
        }

        this.navbarCollapse = () => {
            this.setState({
                activeNavbar: !this.state.activeNavbar
            });
        }; // This is not a very clean way to declare a function, but it's needed to support older versions of Safari (which I am currently using because CoreStorage is slow as hell and can't upgrade my MacBook to macOS Monterey).
    };

    render() {
        return(
            <div> {/* wrapper so that i can export it as a component */}
                <div className="spacer">
                    &nbsp;
                </div>
                <nav className="menu">
                    <Link href="/">
                        <a>
                            <div className="logo">
                                <h2><b>Ulises Viña</b></h2>
                            </div>
                        </a>
                    </Link>
                    <ul className={`nav ${this.state.activeNavbar ? "active" : ""}`}>
                        <li className="link"><Link href="/"><a><IoMdHome/> Inicio</a></Link></li>
                        <li className="link"><Link href="/contact"><a><IoIosMail/> Contacto</a></Link></li>
                    </ul>
                    <div className="burger" id="burger" onClick={this.navbarCollapse}>
                        <IoIosMenu/>
                    </div>
                </nav>
            </div>
        )
    }
}