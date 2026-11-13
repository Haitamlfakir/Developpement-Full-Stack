import CarteMetier from "./CarteMetier"
import Section from "./Section"

function MainContent ({ onOpenAuth, modules, technologies, metiers }) {

    return (
        <main className="main-content">
            {/* Banniere */}
            <div className="banner" id="acceuil">
                <h1>Developpement Full Stack</h1>

                <p>Devenz un developpeur capable de creer des applications web modernes et complete.</p>

                <button onClick={onOpenAuth('inscription')}>
                    Je m'inscris
                </button>
            </div>

            {/* Chiffres cles */}
            <div className="stats">
                <div className="stat-card">
                    <h3>Technicien Specialise</h3>
                    <p>Niveau</p>
                </div>

                <div className="stat-card">
                    <h3>2 ans</h3>
                    <p>Duree</p>
                </div>

                <div className="stat-card">
                    <h3>Bac</h3>
                    <p>Acces</p>
                </div>

                <div className="stat-card">
                    <h3>Stage</h3>
                    <p>Formation Pratique</p>
                </div>
            </div>

            {/* Presentation */}
            <Section id='presentation' titre='Presentation'>
                <p>
                    La filière Développement Full Stack forme des
                    professionnels capables de concevoir et développer
                    des applications web complètes, du front-end
                    jusqu'au back-end.
                </p>
            </Section>

            {/* Objectifs */}
            <Section id='objectifs' titre='Objectifs de la formation'>
                <p>
                    Apprendre à créer des sites web dynamiques,
                    gérer les bases de données, développer des API
                    et maîtriser les technologies modernes du web.
                </p>
            </Section>

            {/* Modules */}
            <Section id='modules' titre='Modules de formation'>
                <h3>Premiere Annee</h3>
                <div className="module-list">
                    {modules.filter((module) => module.annee === 1).map((module) => (
                        <div className="module-card" key={module.id}>
                            {module.titre}
                        </div>
                    ))}
                </div>

                <h3>Deuxieme Annee</h3>
                {modules.filter((module) => module.annee === 2).map((module) => (
                        <div className="module-card" key={module.id}>
                            {module.titre}
                        </div>
                    ))}
            </Section>

            {/* Technologies */}
            <Section id='technologies' titre='Technologies utilisees'>
                <div className="technology-list">
                    {technologies.map((tech, index) => (
                        <span className="technology" key={index}>
                            {tech}
                        </span>
                    ))}
                </div>
            </Section>

            {/* Debouches */}
            <Section id='debouches' titre='Debouches professionnels'>
                <div className="job-list">
                    {metiers.map((metier) => (
                        <CarteMetier 
                            key={metier.id}
                            metier={metier.titre}
                            description={metier.description}
                        />
                    ))}
                </div>
            </Section>

            {/* Admission */}
            <Section id='admission' titre="conditions d'admission">
                <p>
                    L'accès à cette formation est généralement
                    ouvert aux candidats titulaires du baccalauréat,
                    selon les conditions de l'établissement.
                </p>
            </Section>
        </main>
    )
}

export default MainContent