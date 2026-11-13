function Section ({ id, titre, children }) {
    return (
        <section id={id} className="content-section">
            <h2>{titre}</h2>
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}

export default Section