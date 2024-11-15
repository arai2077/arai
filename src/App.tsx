import { Navigation } from "@/components/ui/navigation-menu";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />

      <div className="content">
        <h1>Arai</h1>
        <div className="card">
          <p className="card-content">Card content</p>
        </div>
      </div>
    </>
  );
}

export default App;
