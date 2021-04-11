import { HashRouter, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Intro from './Intro';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => {
    return (
        <div id="Main">
            <HashRouter>
                <Header />
                    <Route exact path="/" component={ Home }/>
                    <Route path="/intro" component={ Intro }/>
                    <Route path="/contact" component={ Contact }/>
                    <Route path="/projects" component={ Projects }/>
            </HashRouter>
        </div>
    )
}

export default Main;