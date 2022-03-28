import Link from 'next/link'

const Error = () => {
    return (
        <div className="center">
            <div className="mt-5">
                <span className="big-text"><i><b>Error 404</b></i></span><br />
            </div>
            <div className="mt-3">
                <h1>Not Found</h1><br />
            </div>
            <Link href="/"><button className="mt-2 button-primary">Return to Home</button></Link>
        </div>
    )   
}

export default Error;