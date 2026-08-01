import { PiggyBank } from "lucide-react"
import { FormStep } from "./FormStep"
import { StepProgress } from "./Progress"

export const Simulationform = () => {
    return (
        <>
            <StepProgress currentStep={1} totalSteps={6}/>
            <FormStep icon={PiggyBank} title="Renda mensal bruta" question="Quanto é deposositado na sua conta todo mês (somando todas as fontes)?" inputProps={{
                type: 'text',
                placeholder: 'Ex: R$ 1.800,00',
                prefix: 'R$'
            }}/>
        </>
    )
}