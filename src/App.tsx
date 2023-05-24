import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { PokemonProvider } from "./context/PokemonContext";
import "./App.css";

function App() {
    return (
        <PokemonProvider>
            <Header />
            <Outlet />
        </PokemonProvider>
    );
}

export default App;
