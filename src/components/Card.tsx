const Card = ({ pokemon }: any) => {
    return (
        <div className="col">
            <div className="card border-dark g-3 ">
                <div
                    style={{ height: "250px" }}
                    className="position-relative bg-light rounded"
                >
                    <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        className="card-img-top object-fit-contain p-3"
                        alt="pokemon image"
                        width={50}
                        height={250}
                    />
                    <p
                        style={{ whiteSpace: "nowrap" }}
                        className="position-absolute top-0 start-100 bg-success translate-middle border rounded border-success p-1 text-light"
                    >
                        xp: {pokemon.base_experience}
                    </p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <p className="card-text"> id: {pokemon.id}</p>
                    <a href={`/${pokemon.id}`} className="btn w-100 btn-info">
                        Examinar
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
