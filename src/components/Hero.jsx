import {CTABtn} from "./CTABtn"
import {Section} from "./Section"

export const Hero = () => {
    return (
        <Section id="inicio">
            <div class="flex flex flex-col gap-1">
                <h1 class="text-3xl font-bold italic">
                        Hola
                    <span class="text-xl font-regular pr-2">
                        , soy 
                    </span>
                        Jonatan Missora
                </h1>
                <CTABtn className="text-xl" href="/#contacto">Trabajemos Juntos</CTABtn>
                <h2 class="mt-4">Diseñador y desarrollador Web</h2>
                <h2>Freelance - Argentino</h2>

            </div>
        </Section>
    )
}