"use client";

import React, { useState } from "react";
import { generateBusinessPlanPDF, generateBusinessPlanExcel } from "@/lib/documentGenerators-advanced";

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
          <h2 className="text-2xl font-bold mb-4">Plano de Negócios Acadêmico Avançado</h2>
          <p className="text-muted-foreground mb-2">
            Análise estratégica de nível mestrado/doutorado com metodologias científicas
          </p>
          <p className="text-sm text-muted-foreground">
            Porter's Five Forces • SWOT • Business Model Canvas • Monte Carlo • Valuation
          </p>
        </div>

        {/* Document Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* PDF Option */}
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Documento PDF Acadêmico</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Análise estratégica rigorosa com fundamentação teórica científica
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Análise das Cinco Forças de Porter</li>
                <li>• Business Model Canvas detalhado</li>
                <li>• Modelagem financeira probabilística</li>
                <li>• Análise SWOT e PESTEL avançada</li>
                <li>• Matriz de riscos quantificada</li>
                <li>• Referências bibliográficas acadêmicas</li>
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
              <h3 className="text-xl font-semibold mb-2">Planilhas Excel Avançadas</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Modelagem financeira sofisticada com análises quantitativas
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Fluxo de caixa descontado (VPL/TIR)</li>
                <li>• Análise de sensibilidade Monte Carlo</li>
                <li>• Matriz de riscos quantificada</li>
                <li>• Balanced Scorecard com KPIs</li>
                <li>• Análise de mercado quantitativa</li>
                <li>• Valuation por múltiplos setoriais</li>
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
          <h4 className="font-semibold mb-2">Características Acadêmicas:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Metodologia científica rigorosa com fundamentação teórica sólida</li>
            <li>• Análises quantitativas baseadas em simulação Monte Carlo (10.000 iterações)</li>
            <li>• Benchmarking internacional e revisão sistemática da literatura</li>
            <li>• Padrão de qualidade adequado para defesa de mestrado/doutorado</li>
            <li>• Referências bibliográficas de periódicos acadêmicos indexados</li>
            <li>• Validação estatística de hipóteses com testes de significância</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanGenerator;
