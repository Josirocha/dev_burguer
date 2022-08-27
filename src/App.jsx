import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                {/* home */}
                <Route />
                {/* login */}
                <Route path="login" element={<Login />}/>
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
