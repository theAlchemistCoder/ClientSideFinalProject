import axios from 'axios';
import Characters from './Characters';
import { useEffect, useState } from "react";

export default function Grid() {


    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const baseurl = 'https://rickandmortyapi.com/api/character';
    
        axios.get(baseurl).then((response) => {

          console.log(response.data.results);  
          setCharacters(response.data.results)
        })
      }, [])


return (
    <>
    <div className="container">
        {characters.map((character) => {
            return (
            <div className="card" key={character.id}>
                <h2>{character.name}</h2>
                <p>{character.species}</p>
                <p>{character.status}</p>
                <p>{character.origin.name}</p>
                <p>{character.location.name}</p>
                <p>{character.episode.length}</p>
                <img src={character.image} alt={character.name}></img>
                <p> </p>
                {/* {recipe.ingredients.map((ingredient) => {return <p>{ingredient}</p>})} */}
            </div>
            );
        })}
    </div>
    </>
)
}