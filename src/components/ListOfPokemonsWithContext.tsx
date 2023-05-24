import { useEffect } from "react";
import { usePokemons } from "../context/PokemonContext";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const ListOfPokemonsWithContext = () => {
    const ctx = usePokemons();
    const { filter, pokemons } = ctx.getState();
    const navigate = useNavigate();

    const getAllPokemons = async () => {
        if (filter.length < 1) {
            navigate("/");
            return;
        }
        const res = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0"
        );
        const data = await res.json();

        const dataFiltered = data.results.filter((pokemon: any) =>
            pokemon.name.includes(filter.toLowerCase().trim())
        );

        const promises = dataFiltered.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });

        const results = await Promise.all(promises);

        ctx.setPokemons(results);
    };

    useEffect(() => {
        getAllPokemons();
    }, [filter]);

    return (
        <div className="justify-content-evenly d-flex p-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 w-100">
                {pokemons.length > 0 ? (
                    pokemons.map((pokemon: any) => (
                        <Card key={pokemon.id} pokemon={pokemon} />
                    ))
                ) : (
                    <div className="position-absolute top-50 start-50 translate-middle fs-1 w-75 text-center">
                        No se encontraron coincidencias :(
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListOfPokemonsWithContext;
