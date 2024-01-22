export const Section = ({id, children}) => {
    return (
        <section id={id} class="w-1/2 mx-auto min-h-screen border grid place-items-center">
            {children}
        </section>
    )
}