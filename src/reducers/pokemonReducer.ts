type actionType = {
    type: string;
    payload: any;
};

type stateType = {
    pokemons: any[];
    filter: string;
};

export const pokemonReducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case "set/pokemons":
            return {
                ...state,
                pokemons: action.payload
            };

        case "set/filter":
            return {
                ...state,
                filter: action.payload
            };

        default:
            return state;
    }
};
