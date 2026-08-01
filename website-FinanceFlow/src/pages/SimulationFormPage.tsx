import { SimulationHero } from "../components/features/Simulation/hero" 
import { Simulationform } from "../components/features/Simulation/form" 

export function SimulationFormPage() {
    return (
        <>
        <main className="mx-auto max-w-xl px-4 py-10 sm:py-14">
            <SimulationHero/>
            <Simulationform/>
        </main>
        </>
    )
}