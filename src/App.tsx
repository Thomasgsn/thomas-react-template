import { Navbar } from "./components";

{/* ↓ Delete this ↓ */ }
import { Del } from "./Delete/Del";
import { Form, Icons } from "./Delete/Section";
{/* ↑ Delete this ↑ */ }

function App() {
  return (
    <>
      <div className="min-h-screen bg-primary-bg transition-colors pb-4">
        <Navbar />
        <main className="centered">

          {/* ↓ Delete this ↓ */}
          <Del />

          <div className="flex-col md:flex-row flex justify-between gap-12 *:flex-1 *:bg-black/5 *:dark:bg-white/5 *:rounded-xl">
            <Form />
            <Icons />
          </div>

          {/* ↑ Delete this ↑ */}

        </main>
      </div>
    </>
  );
}

export default App;
