import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const fetchPokemonByIdOrName = async (id: string | undefined) => {
    if (!id) return [];

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    return data;
};

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const data = await fetchPokemonByIdOrName(id);
            setPokemon(data);
        })();
    }, []);

    return (
        <div className="container-fluid p-5">
            <div className="d-flex justify-content-evenly">
                <div className="w-25 content-card">
                    <p style={{ fontSize: "100px" }} className="text-black-50">
                        #{pokemon.id}
                    </p>
                    <p className="fs-1 text-end">{pokemon.name}</p>
                    <ul className="list-group list-group-horizontal mb-2">
                        {pokemon.types?.map((type: any) => (
                            <li
                                key={type.type.name}
                                className="list-group-item"
                            >
                                {type.type.name}
                            </li>
                        ))}
                    </ul>

                    <ul className="list-group list-group-horizontal ">
                        <li className="list-group-item ">
                            <p>Altura</p>
                            <span>{pokemon.height * 10}Cm</span>
                        </li>
                        <li className="list-group-item ">
                            <p>Peso</p>
                            <span>{pokemon.weight / 10}Kg</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src={
                            pokemon.sprites?.other?.dream_world
                                ?.front_default ||
                            pokemon.sprites?.front_default
                        }
                        className="position-sticky position-sm-absolute top-0 img-fluid"
                        alt={`Pokemon ${pokemon.name}`}
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="container-fluid border bg-light p-3 mt-3">
                <h1 className="text-center">Estadísticas</h1>
                <div className="container">
                    {pokemon.stats?.map((stat: any) => (
                        <div
                            key={stat.stat.name}
                            className="align-items-center row"
                        >
                            <span className="col-3 p-0 text-center">
                                {stat.stat.name}
                            </span>
                            <div className="progress col-6 p-0">
                                <div className="progress-bar w-100" />
                            </div>
                            <span className="fs-2 col-3 p-0 text-center">
                                {stat.base_stat}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
