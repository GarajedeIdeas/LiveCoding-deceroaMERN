import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <main>
            <h1>Binevenid@ a la MERN Coasters!</h1>
            <hr />
            <Link to="/galeria">Ver galeria</Link>
        </main>
    )
}

export default IndexPage