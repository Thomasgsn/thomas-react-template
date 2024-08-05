import { ThemeToggler } from "./components/ThemeToggler";

function App() {
  return (
    <>
      <div className="bg-slate-50 dark:bg-slate-800 h-screen p-2">
        <ThemeToggler />
        <h1 className="text-slate-900 dark:text-white pt-2">
          React + Vite + TailwindCss + Lucide Icon
        </h1>
      </div>
    </>
  );
}

export default App;
