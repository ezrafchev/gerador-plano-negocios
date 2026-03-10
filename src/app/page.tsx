import BusinessPlanGenerator from "@/components/BusinessPlanGenerator";
import DashboardPreview from "@/components/DashboardPreview";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header / Hero */}
      <header className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-block bg-primary-foreground/10 text-primary-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                CNAE 3832-2/00 · Vespasiano, RMBH – MG
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                EcoRubber Tech Industrial
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                Plano de negócios estratégico para microusina industrial sustentável de
                beneficiamento de borracha reciclada e fornecimento de fixadores técnicos.
              </p>
            </div>
            <div className="shrink-0 text-right hidden md:block">
              <div className="text-5xl font-black">67,3%</div>
              <div className="text-sm text-primary-foreground/70 font-medium">TIR Projetada</div>
            </div>
          </div>

          {/* KPI bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Investimento Inicial", value: "R$ 58.300" },
              { label: "VPL (12% a.a.)", value: "R$ 127.450" },
              { label: "Payback Descontado", value: "16 meses" },
              { label: "ROI Acumulado (3a)", value: "184%" },
              { label: "EBITDA Margin (Ano 3)", value: "52,1%" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="bg-primary-foreground/10 rounded-lg px-4 py-3"
              >
                <div className="text-xl font-bold">{kpi.value}</div>
                <div className="text-xs text-primary-foreground/70 mt-0.5">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-12 space-y-16">
        {/* Dashboard preview with charts */}
        <DashboardPreview />

        {/* About section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sobre o Projeto</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Problema & Oportunidade",
                body: "Déficit de 35% na oferta de componentes técnicos reciclados no setor industrial, com crescimento de 18% a.a. na demanda por soluções sustentáveis (ABIPLAST, 2024). Lacuna no mercado regional de MG para fornecimento especializado B2B.",
              },
              {
                title: "Solução Proposta",
                body: "Microusina com capacidade de 2.500 kg/mês de borracha processada. Portfólio de 47 SKUs em fixadores técnicos certificados. Modelo híbrido B2B direto + marketplace industrial com diferenciação por sustentabilidade.",
              },
              {
                title: "Mercado-Alvo",
                body: "TAM: R$ 2,3 bi (Brasil) · SAM: R$ 180 mi (MG) · SOM: R$ 1,2 mi (meta 3 anos). Clientes âncora: Poliway Industrial, Vale S.A., CSN, Usiminas e ArcelorMittal.",
              },
            ].map((card) => (
              <div key={card.title} className="border rounded-xl p-6 bg-card">
                <h3 className="font-semibold text-base mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology badges */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Metodologias Aplicadas</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Porter's Five Forces",
              "SWOT / PESTEL",
              "Business Model Canvas",
              "Value Proposition Design",
              "Lean Startup",
              "Blue Ocean Strategy",
              "Análise Monte Carlo (10k iterações)",
              "Valuation por Múltiplos",
              "Balanced Scorecard",
              "ISO 9001:2015 / ISO 14001:2015",
              "Industry 4.0 / IoT",
              "BPMN 2.0",
            ].map((m) => (
              <span
                key={m}
                className="inline-flex items-center bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full border"
              >
                {m}
              </span>
            ))}
          </div>
        </section>

        {/* Document generator */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Gerar Documentos</h2>
          <BusinessPlanGenerator />
        </section>

        {/* Document content preview */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Conteúdo dos Documentos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6 bg-card">
              <h3 className="font-semibold mb-4">📄 PDF Acadêmico (25+ páginas)</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                {[
                  "Capa profissional e sumário executivo",
                  "Introdução e contextualização teórica",
                  "Análise setorial – 5 Forças de Porter",
                  "Mapeamento da cadeia de valor",
                  "Business Model Canvas detalhado",
                  "Estratégia operacional e tecnológica",
                  "Modelagem financeira probabilística",
                  "Análise de sensibilidade e cenários",
                  "Matriz de riscos quantificada",
                  "Roadmap estratégico e milestones",
                  "Referências bibliográficas acadêmicas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border rounded-xl p-6 bg-card">
              <h3 className="font-semibold mb-4">📊 Excel Avançado (8 abas)</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                {[
                  "Investimento inicial detalhado",
                  "Fluxo de caixa descontado (VPL/TIR)",
                  "Projeção de faturamento 5 anos",
                  "Análise de sensibilidade Monte Carlo",
                  "Tabela de preços e margens por SKU",
                  "Balanced Scorecard com KPIs",
                  "Matriz de riscos quantificada",
                  "Valuation por múltiplos setoriais",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4 mt-8">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EcoRubber Tech Industrial Ltda. — Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/ezrafchev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              ezrafchev
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
