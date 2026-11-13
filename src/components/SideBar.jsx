function SideBar ({ sections, sectionActive, onSelect }) {
    return (
        <aside className="sidebar">
            <h3>Sommaire</h3>

            <ul>
                {sections.map((section) => (
                    <li key={section.id}>
                        <a 
                            href={`#${section.id}`}
                            className={sectionActive === section.id ? 'actif' : ''} 
                            onClick={(e) => {
                                e.preventDefault();
                                onSelect(section.id)
                            }}
                        >
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar