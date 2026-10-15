import { useState } from 'react'

const stack = [
  { name: 'React 19', detail: 'with hooks + TypeScript' },
  { name: 'Vite 8', detail: 'fast dev server + builds' },
  { name: 'Tailwind CSS 4', detail: 'CSS-first config' },
  { name: 'GitHub Pages', detail: 'deploys on push to main' },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-surface">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-semibold tracking-tight">
            Aether<span className="text-accent">Expressive</span>
          </span>
          <a
            href="https://github.com"
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium transition hover:border-slate-300 hover:bg-slate-50"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-20">
        <section className="text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight text-balance sm:text-6xl">
            A site that ships itself
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 text-pretty">
            Edit <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base">src/App.tsx</code>{' '}
            and push. GitHub Actions builds and publishes it to GitHub Pages.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCount((c) => c + 1)}
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow-sm transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Count is {count}
            </button>
            <a
              href="https://vite.dev/guide/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-surface px-6 py-3 font-semibold transition hover:bg-slate-50"
            >
              Read the docs
            </a>
          </div>
        </section>

        <section className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-surface p-5 transition hover:border-slate-300"
            >
              <h2 className="font-display font-semibold">{item.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-slate-500">
          Deployed with GitHub Actions
        </div>
      </footer>
    </div>
  )
}

export default App