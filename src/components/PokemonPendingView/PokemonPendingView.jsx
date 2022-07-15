import { ImSpinner } from "react-icons/im";
import PokemonDataView from "../PokemonDataView/PokemonDataView";

export default function PokemonPendingView({ pokemonName }) {
    // const pokemon = {
    //     name: pokemonName,
    //     sprites: {
    //         other: {
    //             'official-artwork': {
    //                 front_default:pendingImage,
    //             }
    //         }
    //     }
    // }

    return (
        <div role='alert'>
            <div><ImSpinner size='32' /></div>
            {/* {<PokemonDataView pokemon = {pokemon}/>} */}
        </div>
    )
}