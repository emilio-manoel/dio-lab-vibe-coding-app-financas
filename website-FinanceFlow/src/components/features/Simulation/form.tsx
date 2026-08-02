import { FormStep } from "./FormStep";
import { StepProgress } from "./Progress";
import {
  simulationFormSteps,
  type SimulationFormData,
} from "../../../data/simulation";
import { useState } from "react";
import { useSimulationStorage } from "../../../hooks/useSimulationStorage";
import { useNavigate } from "react-router-dom";

export const Simulationform = () => {
  const { saveFormData } = useSimulationStorage();
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<SimulationFormData>(
    {} as SimulationFormData,
  );
  const totalSteps = simulationFormSteps.length;
  const currentStep = simulationFormSteps[currentStepIndex];

  const handleNextStep = (value: string) => {
    const updatedFormData = {
      ...formData,
      [currentStep.id]: value,
    };
    setFormData(updatedFormData);

    if (currentStepIndex + 1 > totalSteps - 1) {
      saveFormData(updatedFormData);
      void navigate("/resultado");
      return;
    }

    setCurrentStepIndex((prev) => prev + 1);
  };

  const handlePrevieousStep = () => {
    if (currentStepIndex === 0) return;
    setCurrentStepIndex((prev) => prev - 1);
  };

  return (
    <>
      <StepProgress
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePrevieousStep}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0}
      />
    </>
  );
};
