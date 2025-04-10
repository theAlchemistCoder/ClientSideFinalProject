import axios from 'axios';
//import Recipe from './Recipe';
import { useEffect, useState } from "react";

export default function Grid() {


    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const baseurl = 'https://rickandmortyapi.com/api/character';
    
        axios.get(baseurl).then((response) => {
          setCharacters(response.results)
        })
      }, [])

    // function handleClick(i) {
    //     setVeggies((prevVeggies) => {

    //         return prevVeggies.map((veggie, index) => {
    //             if (index === i) {
    //                 return { ...veggie, likeCount: veggie.likeCount++ };
    //             }
    //             return veggie;
    //         });
    //     });

    //}


return (
    <>
    <div className="container">
        {characters.map((character) => {
            return (
            <div className="card" key={recipe.id}>
                <h2>{character.name}</h2>
                <p>{character.species}</p>
                <p>{character.status}</p>
                <p>{character.origin.name}</p>
                <p>{character.location.name}</p>
                <p>{character.episode.length}</p>
                <img src={character.image} alt={character.name}></img>
                {/* {recipe.ingredients.map((ingredient) => {return <p>{ingredient}</p>})} */}
            </div>
            );
        })}
    </div>
    </>
)
}