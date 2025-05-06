import { Navbar } from "./components";

{/* ↓ Delete this ↓ */ }
import { Del } from "./Delete/Del";
import { Form, Icons, Modals } from "./Delete/Section";
{/* ↑ Delete this ↑ */ }

function App() {

  return (
    <>
      <div className="min-h-screen bg-primary-bg transition-colors pb-4">
        <Navbar />
        <main className="centered">

          {/* ↓ Delete this ↓ */}

          <Del />

          <div className="flex-col md:flex-row flex justify-between gap-2 *:flex-1 *:bg-black/5 *:dark:bg-white/5 *:rounded-xl">
            <Form />
          </div>

          <div className="flex-col md:flex-row flex justify-between gap-2 *:flex-1 *:bg-black/5 *:dark:bg-white/5 *:rounded-xl mt-2">
            <Modals />
          </div>

          {/* ↑ Delete this ↑ */}

        </main>
      </div>
    </>
  );
}

export default App;
