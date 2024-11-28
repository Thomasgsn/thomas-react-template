import { ThemeToggler } from "./components/ThemeToggler";

{/* ↓ Delete this ↓ */}
import { Del } from "./Delete/Del";
{/* ↑ Delete this ↑ */}

function App() {
  return (
    <>
      <div className="h-screen bg-light-background dark:bg-dark-background transition-colors">
        <div className="mx-[5vw] sm:mx-[10vw] md:mx-[20vw] py-16 justify-between flex items-center">
          <h1 className="text-lg">
            React TypeScript Thomas's Template<span className="animate-pulse">.</span>
          </h1>
          <ThemeToggler />
        </div>

        {/* ↓ Delete this ↓ */}
        <Del />
        {/* ↑ Delete this ↑ */}
      </div>
    </>
  );
}

export default App;
