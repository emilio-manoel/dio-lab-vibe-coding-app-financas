import { FormStep } from "./FormStep"
import { StepProgress } from "./Progress"
import { simulationFormSteps } from "../../../data/simulation"
import { useState } from "react"

export const Simulationform = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const totalSteps = simulationFormSteps.length
    const currentStep = simulationFormSteps[currentStepIndex]

    const handleNextStep = () => {
        if (currentStepIndex + 1 > totalSteps - 1) return
        setCurrentStepIndex((prev) => prev + 1)
    }

    const handlePrevieousStep = () => {
        if(currentStepIndex === 0) return
        setCurrentStepIndex((prev) => prev - 1)
    }

    return (
        <>
            <StepProgress currentStep={currentStepIndex + 1} totalSteps={totalSteps}/>
            <FormStep 
            key={currentStep.id}
            {...currentStep}
            onBack={handlePrevieousStep}
            onNext={handleNextStep}
            hideBackButton={currentStepIndex === 0}
            />
        </>
    )
}