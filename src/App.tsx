import { Navbar } from "./components";

{/* ↓ Delete this ↓ */ }
import { Del } from "./Delete/Del";
import { Form } from "./Section";
{/* ↑ Delete this ↑ */ }

function App() {
  return (
    <>
      <div className="min-h-screen bg-primary-bg transition-colors pb-4">
        <Navbar />
        <main className="margin-auto space-y-10">

          {/* ↓ Delete this ↓ */}
          <Del />

          <div className="**:w-full mx-0.5 xl:mx-16 *:border *:border-black/25  *:dark:border-white/10 *:rounded-xl *:p-3 *:md:p-6 flex items-center justify-center gap-4 lg:gap-6">
            <div>
              <Form />
            </div>  
          </div>
          {/* ↑ Delete this ↑ */}
          
        </main>
      </div>
    </>
  );
}

export default App;
