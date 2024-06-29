import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const startPromise = async () => {
    try {
      toast.loading("Зара все буде", { id: "123" });

      const res = await toast.success("Опа...");
    } catch (err) {
      toast.error("Що бля?", { id: "123" });
    }
  };

  return (
    <>
      <h1>Sirozhka</h1>
      <div className="card">
        <button onClick={() => startPromise()}>Gayhub</button>
        <button onClick={() => startPromise()}>Отримати</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Toaster />
    </>
  );
}

export default App;
