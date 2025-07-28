"use client";

import React, { useState } from "react";
import { generateBusinessPlanPDF, generateBusinessPlanExcel } from "@/lib/documentGenerators";

const BusinessPlanGenerator = () => {
  const [loadingPDF, setLoadingPDF] = useState(false);
  const [loadingExcel, setLoadingExcel] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleGeneratePDF = async () => {
    setError(null);
    setSuccess(null);
    setLoadingPDF(true);
    try {
      await generateBusinessPlanPDF();
      setSuccess("PDF gerado com sucesso! O download deve iniciar automaticamente.");
    } catch (err) {
      console.error(err);
      setError("Erro ao gerar o PDF. Tente novamente.");
    } finally {
      setLoadingPDF(false);
    }
  };

  const handleGenerateExcel = async () => {
    setError(null);
    setSuccess(null);
    setLoadingExcel(true);
    try {
      await generateBusinessPlanExcel();
      setSuccess("Excel gerado com sucesso! O download deve iniciar automaticamente.");
    } catch (err) {
      console.error(err);
      setError("Erro ao gerar o Excel. Tente novamente.");
    } finally {
      setLoadingExcel(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Status Messages */}
      {error && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-destructive font-medium">{error}</p>
        </div>
      )}
      
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 font-medium">{success}</p>
        </div>
      )}

      {/* Main Generator Card */}
      <div className="bg-card border rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Documentos do Plano de Negócios</h2>
          <p className="text-muted-foreground">
            Gere os documentos completos do seu plano de negócios com um clique
          </p>
        </div>

        {/* Document Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* PDF Option */}
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Documento PDF</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Plano de negócios completo formatado profissionalmente
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Capa e sumário profissional</li>
                <li>• 20+ páginas de conteúdo detalhado</li>
                <li>• Análise de mercado e concorrência</li>
                <li>• Estrutura operacional completa</li>
                <li>• Projeções financeiras</li>
                <li>• Cronograma de implementação</li>
              </ul>
            </div>
            <button
              onClick={handleGeneratePDF}
              disabled={loadingPDF || loadingExcel}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {loadingPDF ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Gerando PDF...
                </span>
              ) : (
                "Gerar Documento PDF"
              )}
            </button>
          </div>

          {/* Excel Option */}
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Planilhas Excel</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Dados financeiros e operacionais em planilhas editáveis
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Investimento inicial detalhado</li>
                <li>• Fluxo de caixa 24 meses</li>
                <li>• Cronograma operacional</li>
                <li>• Projeção faturamento 5 anos</li>
                <li>• Tabela de preços e margens</li>
                <li>• Indicadores financeiros</li>
              </ul>
            </div>
            <button
              onClick={handleGenerateExcel}
              disabled={loadingPDF || loadingExcel}
              className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {loadingExcel ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                  Gerando Excel...
                </span>
              ) : (
                "Gerar Planilhas Excel"
              )}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-t pt-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                handleGeneratePDF();
                setTimeout(() => handleGenerateExcel(), 1000);
              }}
              disabled={loadingPDF || loadingExcel}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Gerar Ambos os Documentos
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Informações Importantes:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Os documentos são gerados com dados realistas para o mercado brasileiro</li>
            <li>• Todas as projeções são baseadas em pesquisa de mercado atual</li>
            <li>• Os arquivos podem ser editados e personalizados conforme necessário</li>
            <li>• Ideal para apresentação a investidores, bancos e parceiros</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanGenerator;
