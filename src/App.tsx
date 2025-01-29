import { Navbar } from "./components";

{/* ↓ Delete this ↓ */}
import { Del } from "./Delete/Del";
{/* ↑ Delete this ↑ */}

function App() {
  return (
    <>
      <div className="h-screen bg-primary-bg transition-colors">
        <Navbar />
        <main className="margin-auto">

          {/* ↓ Delete this ↓ */}
          <Del />
          {/* ↑ Delete this ↑ */}
          
        </main>
      </div>
    </>
  );
}

export default App;
