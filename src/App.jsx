import { use, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import SideBar from "./components/SideBar"
import { sections, modules, technologies, metiers } from './data/filiere'
import AuthModal from "./components/AuthModal"


function App() {
  const [sectionActive, setSectionActive] = useState('presentation');
  const [modeAuth, setModeAuth] = useState(null);
  const [menuOuvert, setMenuOuvert] = useState(false);

  function handleOpenAuth(mode) {
    setModeAuth(mode)
  }

  function handleCloseAuth() {
    setModeAuth(null)
  }

  function handleSwitchAuth() {
    setModeAuth(
      modeAuth === 'connexion' ? 'inscription' : 'connexion'
    );
  }

  function handleSelectSection(id) {
    setSectionActive(id)
    setMenuOuvert(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Header onOpenAuth={handleOpenAuth} />

      <button className="menu-toggle" onClick={() => setMenuOuvert(!menuOuvert)}>
        ☰
      </button>

      <div className="page-layout">
        <SideBar
         sections={sections}
         sectionActive={sectionActive}
         onSelect={handleSelectSection}
        />

        <MainContent 
          onOpenAuth={handleOpenAuth}
          modules={modules}
          technologies={technologies}
          metiers={metiers}
        />
      </div>

      <Footer />

      {modeAuth !== null && (
        <AuthModal 
          mode={modeAuth}
          onClose={handleCloseAuth}
          onSwitch={handleSwitchAuth}
        />
      )}
    </>
  )
}

export default App
