const LINKS = [
    {
        text: "Inicio",
        href: "/#inicio"
    },
    {
        text: "Proyectos",
        href: "/#proyectos"
    },
    {
        text: "Sobre mi",
        href: "/#sobre-mi"
    },
    {
        text: "Contacto",
        href: "/#contacto"
    },
]
export const Header = () => {
    return (
        <header class="w-full bg-black fixed top-0 left-0">
            <nav class=" flex justify-center gap-8 py-4">
                {
                    LINKS.map(({text, href}) => 
                        <a class="hover:text-my-primary" href={href}>{text}</a>
                    )
                }
            </nav>
        </header>
    )
}