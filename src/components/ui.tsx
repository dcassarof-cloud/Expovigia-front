import { ReactNode } from 'react';

export function SectionCard({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-soft">
      <header className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
      </header>
      {children}
    </section>
  );
}

export function Badge({ tone, children }: { tone: 'ok' | 'warning' | 'critical' | 'neutral'; children: ReactNode }) {
  const styles = {
    ok: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    critical: 'bg-rose-50 text-rose-700 border-rose-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  }[tone];

  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${styles}`}>{children}</span>;
}
