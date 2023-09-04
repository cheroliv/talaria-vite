import "./styles.scss";
import "./style.css";
import hero from "./hero";
import { display_pokemons } from "./pokedex";

hero();

await display_pokemons();

export { sum } from "./sum";
