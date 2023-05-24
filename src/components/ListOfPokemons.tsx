import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";
import { getPokemons } from "../utils/getPokemons";
import Loader from "./Loader";

const ListOfPokemons = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [hasMore, _setHasMore] = useState<boolean>(true);

    const getPokemon2 = async () => {
        const data = await getPokemons(pokemons.length);
        setPokemons(prevPokemons => [...prevPokemons, ...data]);
    };

    useEffect(() => {
        (async () => {
            const data = await getPokemons();
            setPokemons(data);
        })();
    }, []);

    return (
        <>
            <InfiniteScroll
                dataLength={pokemons.length}
                next={getPokemon2}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={<h4>No hay mas pokimons</h4>}
            >
                <div className="container-fluid d-flex p-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
                        {pokemons.map(pokemon => (
                            <Card key={pokemon.id} pokemon={pokemon} />
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

export default ListOfPokemons;
