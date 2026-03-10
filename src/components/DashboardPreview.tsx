"use client";

import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { ano: "Ano 1", receita: 156000, custos: 84500, ebitda: 71500 },
  { ano: "Ano 2", receita: 234000, custos: 110000, ebitda: 124000 },
  { ano: "Ano 3", receita: 312000, custos: 136000, ebitda: 176000 },
  { ano: "Ano 4", receita: 390000, custos: 158000, ebitda: 232000 },
  { ano: "Ano 5", receita: 468000, custos: 182000, ebitda: 286000 },
];

const cashFlowData = [
  { mes: "M1", fluxo: -58300 },
  { mes: "M3", fluxo: -42000 },
  { mes: "M6", fluxo: -18000 },
  { mes: "M9", fluxo: 14500 },
  { mes: "M12", fluxo: 48000 },
  { mes: "M18", fluxo: 112000 },
  { mes: "M24", fluxo: 186000 },
];

const revenueBreakdown = [
  { name: "Borracha Granulada", value: 38, color: "#1a1a1a" },
  { name: "Fixadores Técnicos", value: 32, color: "#444" },
  { name: "Tiras e Vedações", value: 18, color: "#777" },
  { name: "Personalização B2B", value: 12, color: "#aaa" },
];

const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

export default function DashboardPreview() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projeções Financeiras</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Revenue & EBITDA */}
        <div className="border rounded-xl p-6 bg-card">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Receita vs. EBITDA (5 anos)
          </h3>
          <ResponsiveContainer width="100%" height={260} aria-label="Gráfico de barras: Receita Bruta vs EBITDA por ano (Ano 1 a Ano 5)">
            <BarChart data={revenueData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={formatBRL} tick={{ fontSize: 11 }} width={70} />
              <Tooltip formatter={(v: number) => formatBRL(v)} />
              <Legend />
              <Bar dataKey="receita" name="Receita Bruta" fill="var(--primary)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="ebitda" name="EBITDA" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Cash Flow */}
        <div className="border rounded-xl p-6 bg-card">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Fluxo de Caixa Acumulado (24 meses)
          </h3>
          <ResponsiveContainer width="100%" height={260} aria-label="Gráfico de linha: evolução do fluxo de caixa acumulado do Mês 1 ao Mês 24">
            <LineChart data={cashFlowData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={formatBRL} tick={{ fontSize: 11 }} width={70} />
              <Tooltip formatter={(v: number) => formatBRL(v)} />
              <Line
                type="monotone"
                dataKey="fluxo"
                name="Fluxo Acumulado"
                stroke="var(--primary)"
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue mix pie */}
        <div className="border rounded-xl p-6 bg-card">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Mix de Receita por Produto (%)
          </h3>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="50%" height={200} aria-label="Gráfico de pizza: distribuição percentual da receita por linha de produto">
              <PieChart>
                <Pie
                  data={revenueBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {revenueBreakdown.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
            <ul className="flex-1 space-y-2 text-sm">
              {revenueBreakdown.map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  <span
                    className="inline-block w-3 h-3 rounded-sm shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-muted-foreground flex-1">{item.name}</span>
                  <span className="font-semibold">{item.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Financial KPI table */}
        <div className="border rounded-xl p-6 bg-card">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Indicadores de Viabilidade
          </h3>
          <table className="w-full text-sm">
            <tbody className="divide-y">
              {[
                { label: "VPL (Taxa 12% a.a.)", value: "R$ 127.450", positive: true },
                { label: "TIR", value: "67,3%", positive: true },
                { label: "Payback Simples", value: "14 meses", positive: true },
                { label: "Payback Descontado", value: "16 meses", positive: true },
                { label: "ROI (Ano 1)", value: "42,9%", positive: true },
                { label: "ROI Acumulado (3 anos)", value: "184%", positive: true },
                { label: "Margem Bruta (Ano 1)", value: "45,5%", positive: true },
                { label: "EBITDA Margin (Ano 3)", value: "52,1%", positive: true },
                { label: "Ponto de Equilíbrio", value: "R$ 4.200/mês", positive: true },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="py-2 text-muted-foreground">{row.label}</td>
                  <td className="py-2 text-right font-semibold text-green-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
