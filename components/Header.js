import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles["header"]}>
            <nav className={styles["navbar-container"]}>
                    <h1><b><Link href="/">Ulises Viña</Link></b></h1>
                <button
                    type="button"
                    id="navbar-toggle"
                    aria-controls="navbar-menu"
                    aria-label="Toggle navigation"
                    aria-expanded="false"
                >
                    <FaBars/>
                </button>
                <div id="navbar-menu" aria-labelledby="navbar-toggle">
                <ul className={styles["navbar-links"]}>
                    <li className="navbar-item"><Link className="navbar-link" href="/">Home</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" href="/blog">Blog</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" href="/contact">Contact</Link></li>
                </ul>

                </div>
            </nav>
        </header>
    )
}

export default Header;