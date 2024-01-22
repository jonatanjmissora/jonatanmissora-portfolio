export const CTABtn = ({className, href, children}) => {
    return (
        <a href={href} class={`${className} border px-2 rounded-full w-max opacity-60 bg-white/20 hover:bg-white/50 hover:opacity-80`}>
            {children}
        </a>
    )
}