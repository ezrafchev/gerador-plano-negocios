import BusinessPlanGenerator from "@/components/BusinessPlanGenerator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Gerador de Plano de Negócios Acadêmico
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Análise estratégica de nível mestrado/doutorado para microusina industrial sustentável 
            com metodologias científicas rigorosas e fundamentação teórica sólida.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Baseado em Porter's Five Forces, SWOT, Business Model Canvas, Monte Carlo e Valuation
          </p>
          <div className="mt-6 p-4 bg-card rounded-lg border max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Especificações Acadêmicas do Projeto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Empresa:</strong> EcoRubber Tech Industrial Ltda.
              </div>
              <div>
                <strong>CNAE:</strong> 3832-2/00
              </div>
              <div>
                <strong>Localização:</strong> Vespasiano, RMBH, MG
              </div>
              <div>
                <strong>Investimento:</strong> R$ 58.300 - R$ 85.000
              </div>
              <div>
                <strong>VPL:</strong> R$ 127.450 (Taxa 12% a.a.)
              </div>
              <div>
                <strong>TIR:</strong> 67,3%
              </div>
            </div>
          </div>
        </div>
        
        <BusinessPlanGenerator />
      </div>
    </div>
  );
}
