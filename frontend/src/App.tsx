import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LiveTrades from './pages/LiveTrades';
import TradeCalendar from './pages/TradeCalendar';
import Journal from './pages/Journal';
import News from './pages/News';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 backdrop-blur-sm">
          <div className="mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-6xl">
            <div>
              <h1 className="text-2xl font-semibold text-white">TradingJourney Pro</h1>
              <p className="text-sm text-slate-400">Demo route placeholders for the trading dashboard.</p>
            </div>
            <nav className="flex flex-wrap gap-2">
              <Link className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500" to="/">
                Dashboard
              </Link>
              <Link className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500" to="/trades">
                Live Trades
              </Link>
              <Link className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500" to="/calendar">
                Calendar
              </Link>
              <Link className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500" to="/journal">
                Journal
              </Link>
              <Link className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500" to="/news">
                News
              </Link>
              <Link className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500" to="/settings">
                Settings
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trades" element={<LiveTrades />} />
            <Route path="/calendar" element={<TradeCalendar />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
