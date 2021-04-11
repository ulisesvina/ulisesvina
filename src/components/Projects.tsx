const Projects = () => {
    return (
        <div id="intro" className="container">
            <h3>Proyectos</h3>
            <div className="mt-5">
                <h4>OpenCaptcha</h4>
                OpenCaptcha es un script anti-bots inspirado en reCaptcha de Google. No requiere procesamiento server-side, es ligero, rápido y está basado en Javascript. <br/>
                <a href="https://github.com/ulisesvina/opencaptcha"><span className="icon-github mr-2"></span> ulisesvina/opencaptcha</a> 
            </div>
            <div className="mt-5">
                <h4>RaspIoT</h4>
                RaspIoT es un controlador de GPIO para Raspberry Pi, funciona para prácticas de Internet de las Cosas (IoT). <br/>
                <a href="https://github.com/ulisesvina/raspiot"><span className="icon-github mr-2"></span> ulisesvina/raspiot</a> 
            </div>
            <div className="mt-5">
                <h4>Cfib</h4>
                Serie Fibonacci en C. <br/>
                <a href="https://github.com/ulisesvina/cfib"><span className="icon-github mr-2"></span> ulisesvina/cfib</a> 
            </div>
            <div className="mt-5">
                <h4>py-dice</h4>
                Simulador de dado en Python. <br/>
                <a href="https://github.com/ulisesvina/py-dice"><span className="icon-github mr-2"></span> ulisesvina/py-dice</a> 
            </div>
        </div>
    )
}

export default Projects;