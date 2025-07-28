import BusinessPlanGenerator from "@/components/BusinessPlanGenerator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Gerador de Plano de Negócios
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Gere um plano de negócios completo para uma microusina industrial sustentável 
            e escalável para beneficiamento de borracha reciclada e fornecimento de fixadores técnicos.
          </p>
          <div className="mt-6 p-4 bg-card rounded-lg border max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Especificações do Projeto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Local:</strong> Vespasiano, MG
              </div>
              <div>
                <strong>Tipo:</strong> Microempresa (ME)
              </div>
              <div>
                <strong>Área:</strong> Até 100m²
              </div>
              <div>
                <strong>Capital:</strong> R$ 30.000 - R$ 50.000
              </div>
            </div>
          </div>
        </div>
        
        <BusinessPlanGenerator />
      </div>
    </div>
  );
}
