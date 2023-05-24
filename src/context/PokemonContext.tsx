import {
    ReactNode,
    createContext,
    useContext,
    useMemo,
    useReducer
} from "react";
import { pokemonReducer } from "../reducers/pokemonReducer";
import { ContexType } from "../types/ContextType";

const PokemonContext = createContext<ContexType>({
    setFilter: () => {},
    getState: () => {},
    setPokemons: () => {}
});

export const usePokemons = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(pokemonReducer, {
        pokemons: [],
        filter: ""
    });

    const funtions = useMemo(
        () => ({
            setFilter: (payload: string) =>
                dispatch({ type: "set/filter", payload }),
            setPokemons: (payload: any) =>
                dispatch({ type: "set/pokemons", payload }),
            getState: () => state
        }),
        [dispatch, state]
    );

    return (
        <PokemonContext.Provider value={funtions}>
            {children}
        </PokemonContext.Provider>
    );
};
