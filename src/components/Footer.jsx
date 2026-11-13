function Footer () {
    return (
        <footer className="footer" id="contact">
            <div>
                <h3>Dev FullStack</h3>
                <p>Votre avenir commence avec le developpement web</p>
            </div>

            <div>
                <h3>Liens utiles</h3>
                <a href="#presentation">Presentation</a>
                <a href="#modules">Modules</a>
                <a href="#admission">Admission</a>
            </div>

            <div>
                <h3>Contact</h3>
                <p>Email: contact@fullstack.com</p>
                <p>Telephone: +212 621 813 154</p>
            </div>

            <div>
                © {new Date().getFullYear()} FullStack Academy.
                Tous droits réservés.
            </div>
        </footer>
    )
}

export default Footer