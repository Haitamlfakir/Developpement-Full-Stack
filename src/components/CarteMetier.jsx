function CarteMetier ( {metier, description} ) {
    return (
        <div className="job-card">
            <h3>{metier}</h3>
            <p>{description}</p>
        </div>
    )
}

export default CarteMetier