import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { useRoutes } from "react-router-dom";
import routes from "tempo-routes";

function App() {
  // For the tempo routes
  {
    import.meta.env.VITE_TEMPO && useRoutes(routes);
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add this before any catchall route */}
      {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
    </Routes>
  );
}

export default App;
