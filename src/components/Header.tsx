import { ChangeEvent, useEffect } from "react";
import { usePokemons } from "../context/PokemonContext";
import { ContexType } from "../types/ContextType";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const ctx: ContexType = usePokemons();
    const { filter } = ctx.getState();
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        ctx.setFilter(e.target.value);
    };

    useEffect(() => {
        if (filter.length > 1) {
            navigate("/found");
        }
    }, [filter]);

    return (
        <header className="container-fluid m-0 bg-primary d-flex align-items-center justify-content-evenly p-2">
            <a href="/">
                <img
                    src="/pokemon.svg.png"
                    alt="Logo-pokemon"
                    className=""
                    width={150}
                />
            </a>
            <div className="d-flex gap-2">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                        <img
                            src="./search.svg"
                            alt="search Logo"
                            className=""
                        />
                    </span>
                    <input
                        onChange={e => handleChange(e)}
                        type="text"
                        value={filter}
                        className="form-control shadow-none "
                        placeholder="Nombre de pokemon"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
