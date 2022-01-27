import { useState } from "react"
import { useParams, Link } from "react-router-dom"

import './CoasterDetails.css'

const CoasterDetails = () => {

    const { coaster_id } = useParams()
    const [coaster, setCoaster] = useState({})

    const loadCosterDetails = () => {

        fetch(`http://localhost:5005/api/details/${coaster_id}`)
            .then(response => response.json())
            .then(coaster => setCoaster(coaster))
    }

    loadCosterDetails()

    return (
        <main className="coaster-details">
            <h1>Detalles de {coaster.title}</h1>
            <hr />

            <img src={coaster.imageUrl} />

            <article>
                <p>{coaster.description}</p>
                <h3>Especificaciones</h3>
                <ul>
                    <li>Longitud: {coaster.length}</li>
                    <li>Inversiones: {coaster.height}</li>
                </ul>

                <Link to="/galeria">Volver</Link>
            </article>

        </main>
    )
}

export default CoasterDetails