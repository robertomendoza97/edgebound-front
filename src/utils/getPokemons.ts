export const getPokemons = async (offset: number = 0) => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`,
        { cache: "no-store" }
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
    });

    const results = await Promise.all(promises);

    return results;
};
