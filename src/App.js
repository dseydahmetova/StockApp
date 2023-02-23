import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Stock from "./pages/Stock"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Nav from "./components/Nav"
import {stocks} from "./data"

function App() {
  return (
    <div className="App">
    <Nav />

<div>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/stocks" element={<Dashboard />}/>
  <Route path="/stocks/:symbol" element={<Stock stocks = {stocks}/>}/>
</Routes>
    </div>
    </div>
  );
}

export default App;
