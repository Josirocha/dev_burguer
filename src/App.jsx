import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                {/* home */}
                <Route />
                {/* login */}
                <Route />
                {/* cadastro */}
                <Route />
                {/* cardapio */}
                <Route />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
