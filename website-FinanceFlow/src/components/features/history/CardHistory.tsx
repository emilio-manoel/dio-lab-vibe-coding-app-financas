import type { SimulationRecord } from "../../../data/simulation";
import { Goal, Trash2, ExternalLink } from "lucide-react";
import { calcMonthlySavings } from "../../../utils/simulation";
import { useNavigate } from "react-router-dom";

interface CardHistoryProps {
  data: Partial<SimulationRecord>;
  onDelete?: (id?: string) => void;
}

export function CardHistory({ data, onDelete }: CardHistoryProps) {
  const navigate = useNavigate();

  if (!data || typeof data !== "object") {
    return (
      <li className="p-4 border rounded-2xl bg-gray-50 text-gray-400 mb-3">
        Registro inválido no histórico.
      </li>
    );
  }

  const formattedDate = data.date
    ? isNaN(Date.parse(data.date))
      ? data.date
      : new Date(data.date).toLocaleDateString("pt-BR")
    : new Date().toLocaleDateString("pt-BR");

  const formatGoalAmount = (val?: string) => {
    if (!val) return "R$ 0,00";
    if (val.trim().startsWith("R$")) return val;
    return `R$ ${val}`;
  };

  const formatDeadline = (val?: string) => {
    if (!val) return "0 meses";
    if (val.toLowerCase().includes("mês") || val.toLowerCase().includes("meses")) return val;
    return `${val} meses`;
  };

  const getMonthlySavings = () => {
    if (!data.income || !data.expenses) return "R$ 0,00";
    const num = calcMonthlySavings(data as SimulationRecord);
    return `R$ ${num.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const monthlySavingsFormatted = getMonthlySavings();

  return (
    <li className="bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* VERSÃO DESKTOP (MD+) */}
      <div className="hidden md:flex items-center justify-between gap-4 lg:gap-6">
        {/* Ícone + Nome da Meta + Data */}
        <div className="flex items-center gap-4 min-w-[220px]">
          <div className="w-12 h-12 rounded-2xl bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0">
            <Goal size={22} className="text-purple-600" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 text-base leading-snug">
              {data.goalName || "Sem nome"}
            </h3>
            <span className="text-xs font-medium text-gray-400 mt-0.5">
              {formattedDate}
            </span>
          </div>
        </div>

        {/* Custo da Meta */}
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-purple-900/60 uppercase tracking-wider">
            CUSTO DA META
          </span>
          <span className="text-base font-extrabold text-gray-900 mt-0.5">
            {formatGoalAmount(data.goalAmount)}
          </span>
        </div>

        {/* Prazo */}
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-purple-900/60 uppercase tracking-wider">
            PRAZO
          </span>
          <span className="text-base font-extrabold text-gray-900 mt-0.5">
            {formatDeadline(data.goalDeadline)}
          </span>
        </div>

        {/* Economia Mensal */}
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-purple-900/60 uppercase tracking-wider">
            ECONOMIA MENSAL
          </span>
          <span className="text-base font-extrabold text-gray-900 mt-0.5">
            {monthlySavingsFormatted}
          </span>
        </div>

        {/* Ações (Excluir e Ver detalhes) */}
        <div className="flex items-center gap-3 shrink-0 border-l border-gray-100 pl-4">
          {onDelete && (
            <button
              onClick={() => onDelete(data.id)}
              className="p-2.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
              title="Excluir simulação"
              type="button"
            >
              <Trash2 size={19} className="text-red-500" />
            </button>
          )}

          <button
            onClick={() => data.id && navigate(`/resultado/${data.id}`)}
            className="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 flex items-center gap-2 transition-all cursor-pointer shadow-2xs hover:border-gray-300"
            type="button"
          >
            <ExternalLink size={14} className="text-gray-500" />
            <span>Ver detalhes</span>
          </button>
        </div>
      </div>

      {/* VERSÃO MOBILE (ABAIXO DE MD) */}
      <div className="flex md:hidden flex-col gap-4">
        {/* Ícone */}
        <div className="w-11 h-11 rounded-2xl bg-purple-100/70 text-purple-600 flex items-center justify-center">
          <Goal size={22} className="text-purple-600" />
        </div>

        {/* Nome da Meta + Data */}
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-900 text-base leading-snug">
            {data.goalName || "Sem nome"}
          </h3>
          <span className="text-xs font-medium text-gray-400 mt-0.5">
            {formattedDate}
          </span>
        </div>

        {/* Informações Empilhadas */}
        <div className="flex flex-col gap-3 mt-1">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-purple-900/60 uppercase tracking-wider">
              CUSTO DA META
            </span>
            <span className="text-sm font-extrabold text-gray-900 mt-0.5">
              {formatGoalAmount(data.goalAmount)}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-purple-900/60 uppercase tracking-wider">
              PRAZO
            </span>
            <span className="text-sm font-extrabold text-gray-900 mt-0.5">
              {formatDeadline(data.goalDeadline)}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-purple-900/60 uppercase tracking-wider">
              ECONOMIA MENSAL
            </span>
            <span className="text-sm font-extrabold text-gray-900 mt-0.5">
              {monthlySavingsFormatted}
            </span>
          </div>
        </div>

        {/* Rodapé com botões Excluir e Ver detalhes */}
        <div className="border-t border-gray-100 pt-3 mt-2 flex items-center justify-between text-sm font-medium">
          {onDelete ? (
            <button
              onClick={() => onDelete(data.id)}
              className="flex-1 flex items-center justify-center text-red-500 hover:text-red-700 py-1.5 border-r border-gray-100 cursor-pointer"
              title="Excluir simulação"
              type="button"
            >
              <Trash2 size={18} className="text-red-500" />
            </button>
          ) : (
            <div className="flex-1 border-r border-gray-100" />
          )}

          <button
            onClick={() => data.id && navigate(`/resultado/${data.id}`)}
            className="flex-1 flex items-center justify-center gap-1.5 text-gray-700 hover:text-gray-900 py-1.5 text-xs font-semibold cursor-pointer"
            type="button"
          >
            <ExternalLink size={15} className="text-gray-500" />
            <span>Ver detalhes</span>
          </button>
        </div>
      </div>
    </li>
  );
}
