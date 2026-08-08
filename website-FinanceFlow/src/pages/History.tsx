import { useState } from "react";
import { CardHistory } from "../components/features/history/CardHistory";
import { PageHero } from "../components/shared/PageHero";
import type { SimulationRecord } from "../data/simulation";
import { useSimulationStorage } from "../hooks/useSimulationStorage";

function loadSimulationData(): SimulationRecord[] {
  try {
    const dadosSalvos = localStorage.getItem("simulation-data");
    if (!dadosSalvos) return [];

    const parsed = JSON.parse(dadosSalvos);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch (error) {
    console.error("Erro ao ler do localStorage:", error);
    return [];
  }
}

export function History() {
  const { deleteSimulation } = useSimulationStorage();
  const [data, setData] = useState<SimulationRecord[]>(loadSimulationData);

  const handleDelete = (id?: string, index?: number) => {
    if (id) {
      deleteSimulation(id);
      setData((prev) => prev.filter((item) => item.id !== id));
    } else if (typeof index === "number") {
      try {
        const storage = localStorage.getItem("simulation-data");
        if (storage) {
          const savedData = JSON.parse(storage) as SimulationRecord[];
          if (Array.isArray(savedData)) {
            savedData.splice(index, 1);
            localStorage.setItem("simulation-data", JSON.stringify(savedData));
            setData([...savedData]);
          }
        }
      } catch (e) {
        console.error("Erro ao deletar simulação por índice", e);
      }
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHero
        title="Histórico de simulações"
        subtitle="acompanhe o histórico de seus planos financeiros"
      />

      {data.length === 0 ? (
        <div className="text-center py-12 text-gray-500 border border-dashed border-gray-300 rounded-xl my-6 bg-gray-50 ">
          <p className="text-lg font-medium text-gray-700">
            Nenhuma simulação encontrada.
          </p>
          <p className="text-sm mt-1 text-gray-500">
            Faça uma simulação no site para salvá-la no seu histórico!
          </p>
        </div>
      ) : (
        <ul className="mt-6 space-y-4">
          {data.map((item, index) => (
            <CardHistory
              key={item?.id || index}
              data={item}
              onDelete={() => handleDelete(item?.id, index)}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
