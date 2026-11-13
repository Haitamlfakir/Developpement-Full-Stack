function Header ({ onOpenAuth }) {
    return (
        <header className="header">
            <div className="logo">
                Dev <span>FullStack</span>
            </div>

            <nav className="navbar">
                <a href="#acceuil">Acceuil</a>
                <a href="#filiere">Filiere</a>
                <a href="#formateurs">Formateurs</a>
                <a href="#actualite">Actualite</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="header-buttons">
                <button onClick={() => onOpenAuth('connexion')}>
                    Connexion
                </button>
                <button onClick={() => onOpenAuth('inscription')}>
                    Inscription
                </button>
            </div>

        </header>
    )
}

export default Header