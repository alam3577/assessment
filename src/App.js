import { useEffect } from "react";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Routers from "./Routers";

function App() {
  console.log("RERENDER");
  return (
    <div>
      <Nav />
      <Routers />
    </div>
  );
}

export default App;
