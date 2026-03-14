import {
  AlertTriangle,
  Car,
  Camera,
  Clock3,
  Gauge,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Siren,
  Users,
} from 'lucide-react';
import { Badge, SectionCard } from './components/ui';

const menu = [
  ['Dashboard', LayoutDashboard],
  ['Veículos no parque', Gauge],
  ['Veículos', Car],
  ['Expositores / funcionários', Users],
  ['Histórico de acessos', Clock3],
  ['Alertas', Siren],
  ['Câmera', Camera],
  ['Consulta de placa', Search],
  ['Configuração de horários', Clock3],
] as const;

const kpis = [
  { label: 'Acessos hoje', value: '1.284', delta: '+7,8%', tone: 'ok' as const },
  { label: 'Veículos no parque', value: '426', delta: '+12', tone: 'neutral' as const },
  { label: 'Alertas críticos', value: '05', delta: '-2', tone: 'critical' as const },
  { label: 'Tempo médio de validação', value: '36s', delta: '-9%', tone: 'ok' as const },
];

const entries = [
  ['ABC1D23', 'Portão A', 'Expositor', 'ok'],
  ['QWE9X88', 'Portão C', 'Prestador', 'warning'],
  ['RTY2M11', 'Portão B', 'Funcionário', 'ok'],
  ['POI7K44', 'Portão A', 'Visitante', 'critical'],
] as const;

export function App() {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-slate-100 lg:grid-cols-[280px_1fr]">
      <aside className="border-r border-slate-200 bg-slate-950 px-4 py-6 text-slate-200">
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/20 ring-1 ring-brand-500/40">
              <ShieldCheck className="h-6 w-6 text-brand-100" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Operational Suite</p>
              <h1 className="text-lg font-semibold text-white">ExpoVigia</h1>
            </div>
          </div>
          <p className="text-sm text-slate-400">Monitoramento operacional para eventos de grande porte.</p>
        </div>

        <nav className="space-y-1">
          {menu.map(([label, Icon], idx) => (
            <button
              key={label}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                idx === 0
                  ? 'bg-brand-500/15 text-white ring-1 ring-brand-400/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="p-4 sm:p-6 lg:p-8">
        <header className="mb-6 rounded-2xl border border-slate-200/70 bg-white px-5 py-4 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Central de Operações • Evento ao vivo</p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard executivo</h2>
            </div>
            <div className="flex items-center gap-2">
              <Badge tone="ok">Operação estável</Badge>
              <Badge tone="warning">3 pontos de atenção</Badge>
            </div>
          </div>
        </header>

        <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <article key={kpi.label} className="metric-card">
              <p className="text-sm text-slate-500">{kpi.label}</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-3xl font-semibold tracking-tight text-slate-900">{kpi.value}</p>
                <Badge tone={kpi.tone}>{kpi.delta}</Badge>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
          <SectionCard title="Fluxo de acessos (24h)" subtitle="Picos por janela operacional">
            <div className="h-64 rounded-xl bg-gradient-to-b from-slate-100 to-white p-4">
              <div className="flex h-full items-end gap-2">
                {[42, 58, 40, 71, 63, 88, 74, 60, 48, 56, 62, 69].map((v, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-brand-500/80" style={{ height: `${v}%` }} />
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Alertas por criticidade" subtitle="Últimas 6 horas">
            <div className="space-y-3">
              {[
                ['Crítico', 5, 'critical'],
                ['Atenção', 14, 'warning'],
                ['Normalizado', 27, 'ok'],
              ].map(([label, value, tone]) => (
                <div key={label as string} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{label as string}</span>
                    <Badge tone={tone as 'critical' | 'warning' | 'ok'}>{value as number}</Badge>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 rounded-full bg-slate-700" style={{ width: `${(value as number) * 3}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <section className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_1fr]">
          <SectionCard title="Últimos registros de acesso" subtitle="Visão consolidada por portão">
            <div className="overflow-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[560px] text-sm">
                <thead className="bg-slate-100 text-left text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Placa</th>
                    <th className="px-4 py-3">Portão</th>
                    <th className="px-4 py-3">Tipo</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map(([plate, gate, type, status]) => (
                    <tr key={plate} className="border-t border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-700">{plate}</td>
                      <td className="px-4 py-3 text-slate-600">{gate}</td>
                      <td className="px-4 py-3 text-slate-600">{type}</td>
                      <td className="px-4 py-3">
                        <Badge tone={status as 'ok' | 'warning' | 'critical'}>
                          {status === 'ok' ? 'Liberado' : status === 'warning' ? 'Verificação' : 'Bloqueado'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="Filas de triagem" subtitle="Prioridade operacional">
            <div className="space-y-3">
              {[
                ['Portão A', 'Fluxo alto', 'warning'],
                ['Portão C', 'Falha de câmera', 'critical'],
                ['Portão D', 'Operação normal', 'ok'],
              ].map(([name, desc, tone]) => (
                <article key={name as string} className="rounded-xl border border-slate-200 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium text-slate-800">{name as string}</h4>
                    <Badge tone={tone as 'ok' | 'warning' | 'critical'}>{desc as string}</Badge>
                  </div>
                  <p className="text-sm text-slate-500">Última atualização: há 2 min</p>
                </article>
              ))}
            </div>
          </SectionCard>
        </section>

        <footer className="mt-6 flex items-center gap-2 text-xs text-slate-500">
          <AlertTriangle className="h-3.5 w-3.5" />
          Interface de demonstração visual para evolução premium do produto ExpoVigia.
        </footer>
      </main>
    </div>
  );
}
