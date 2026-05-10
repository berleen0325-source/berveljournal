import { useState } from 'react';

function App() {
  const [count] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-5xl p-6">
        <h1 className="text-4xl font-semibold">TradingJourney Pro</h1>
        <p className="mt-4 text-slate-300">
          Frontend scaffold initialized. Build your dashboard, journal, news feed,
          and broker connection workflow from here.
        </p>
      </main>
    </div>
  );
}

export default App;
