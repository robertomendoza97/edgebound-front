import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListOfPokemons from "../components/ListOfPokemons";
import PokemonDetails from "../components/PokemonDetail";
import ListOfPokemonsWithContext from "../components/ListOfPokemonsWithContext";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <ListOfPokemons />
            },
            {
                path: ":id",
                element: <PokemonDetails />
            },
            {
                path: "found",
                element: <ListOfPokemonsWithContext />
            }
        ]
    }
]);
