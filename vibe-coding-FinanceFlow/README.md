# 💸 FinanceFlow — App de Organização de Finanças Pessoais com Vibe Coding

> Projeto desenvolvido como parte do desafio da DIO: aprender a programar com IA de forma criativa, usando Vibe Coding para construir o conceito de um app financeiro inteligente.

---

## 🧠 O que é Vibe Coding?

Vibe Coding é a arte de guiar a IA com intenção e clareza — sem escrever código linha por linha. Você descreve a vibe da sua ideia e a IA transforma em solução. O foco está em:

- Comunicar ideias com contexto e estrutura
- Usar o PRD como briefing criativo
- Iterar com perguntas diretas e construtivas
- Tratar a IA como parceira criativa, não como ferramenta passiva

---

## 📋 Prompt Final (PRD)

```markdown
# Contexto
Quero criar um aplicativo chamado FinanceFlow — um app de Organização de Finanças 
Pessoais que funciona por meio de conversas naturais com o usuário.
A ideia é facilitar o controle financeiro de forma simples e humana, sem formulários 
manuais, planilhas complexas ou curva de aprendizado.

# Problema
Muitas pessoas desistem de controlar seus gastos porque os apps atuais exigem muita 
entrada manual e oferecem pouca personalização. A experiência é fria e mecânica.
Quero resolver isso com uma interface conversacional e um agente de IA que aprende os 
hábitos do usuário e sugere melhorias automaticamente.

# Público-Alvo
Pessoas entre 20 e 35 anos que querem começar a organizar suas finanças de forma 
prática, sem precisar entender de contabilidade ou planilhas. Especialmente 
profissionais autônomos e iniciantes em educação financeira.

# Funcionalidades-Chave
1. Registrar gastos via chat em linguagem natural ("gastei R$45 no mercado hoje").
2. Classificar automaticamente as transações por categoria (alimentação, lazer, 
   saúde etc.).
3. Definir e acompanhar metas financeiras personalizadas.
4. Receber dicas de economia do "Agente Financeiro" com base no perfil do usuário.
5. Visualizar relatórios simples com gráficos intuitivos e resumos semanais.

# Entregável da IA
- Plano de MVP com as principais telas e fluxo de navegação
- Definição do comportamento e tom de voz do Agente Financeiro
- Recursos técnicos necessários para o MVP
- Estratégia de validação inicial (métricas e hipóteses)
- Tom educativo, acessível e em português brasileiro
```

---

## 📱 Resumo do App — FinanceFlow

O **FinanceFlow** é um aplicativo de finanças pessoais centrado em conversação. Em vez de formulários, o usuário simplesmente digita o que gastou — e a IA cuida do resto.

### Como funciona:

| Etapa | Descrição |
|-------|-----------|
| 💬 **Chat** | O usuário registra gastos em linguagem natural via chat |
| 🤖 **Agente IA** | O Agente Financeiro classifica, analisa e responde com dicas |
| 📊 **Dashboard** | Relatórios visuais simples: categorias, metas e evolução |
| 🎯 **Metas** | O usuário define objetivos e acompanha o progresso em tempo real |
| 💡 **Insights** | Sugestões personalizadas de economia baseadas nos hábitos |

### Telas do MVP:

1. **Onboarding** — Apresentação do Agente Financeiro e coleta do perfil inicial
2. **Chat Principal** — Interface de conversa para registrar gastos e fazer perguntas
3. **Metas** — Lista de objetivos financeiros com barra de progresso
4. **Relatório Semanal** — Resumo automático enviado pelo Agente toda segunda-feira

### O Agente Financeiro:

- **Tom de voz:** amigável, direto e motivador — como um amigo que entende de finanças
- **Comportamento:** responde dúvidas, classifica gastos, celebra conquistas e avisa sobre padrões de risco
- **Exemplo de interação:**

> 👤 *"Gastei R$120 no ifood esse fim de semana"*
>
> 🤖 *"Anotei! Isso já é a terceira vez que você ultrapassa R$100 em delivery no fim de semana. Quer que eu crie uma meta de redução para o mês que vem? 😄"*

---

## 🖼️ Interações com a IA



### Prompt inicial enviado ao Lovable:
![Tela 1 — Prompt no Lovable](prompt%20no%20lovable.png)

### tela de chat:
![Tela 2 — Tela de chat](tela%20de%20chat.png)


### entrega dos calculos de gastos:
![calculo de gastos](resultados%20dos%20calculos.png)


---

## 🔍 Reflexão sobre o Processo

### ✅ O que funcionou bem?

- Estruturar o PRD antes de falar com a IA foi essencial. Quanto mais contexto e intenção no prompt, mais precisa foi a resposta.
- Usar linguagem natural e descritiva ("um amigo que entende de finanças") ajudou a IA a definir o tom do agente com muito mais personalidade do que eu esperava.
- Quebrar o pedido em partes (agente, telas, MVP) tornou as respostas mais focadas e úteis.

### ❌ O que não funcionou como esperado?

- Prompts vagos como "crie um app de finanças" geraram respostas genéricas demais. A IA precisa de direcionamento real.
- A limitação de 5 interações por dia no Lovable exigiu planejamento — não dá para improvisar muito. Planejar as perguntas antes de abrí-lo fez toda a diferença.
- Algumas sugestões da IA eram tecnicamente válidas mas fora do escopo do MVP. Aprendi a dizer "mantenha simples, foque no essencial" como instrução recorrente.

### 💡 O que aprendi sobre conversar com IAs?

- **Contexto é rei.** A IA responde proporcionalmente à qualidade do que você dá a ela.
- **Iteração é o processo.** A primeira resposta raramente é a final — cada mensagem é um refinamento.
- **Tom e intenção importam.** Pedir de forma educativa ("me ajude a pensar sobre...") trouxe respostas mais colaborativas do que comandos secos.
- **A IA não adivinha.** Se você não especifica o público, o tom, o objetivo e as restrições, ela vai assumir os padrões mais genéricos possíveis.
- **Vibe Coding é habilidade.** Não é sobre apertar botões — é sobre saber o que pedir, como pedir e quando parar de pedir. É uma conversa com propósito.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- [Lovable](https://lovable.dev) — geração do conceito visual e fluxo de telas
- [Microsoft Copilot](https://copilot.microsoft.com) — revisão e otimização de prompts
- [GitHub](https://github.com) — documentação e entrega do projeto

---

## 📚 Referências

- Desafio original: [DIO — Vibe Coding com IA](https://dio.me)
- Conceito de MVP: Eric Ries — *The Lean Startup*
- Prompt Engineering: [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)

---

