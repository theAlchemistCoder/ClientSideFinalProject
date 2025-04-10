import axios from 'axios';
import Characters from './Characters';
import { useEffect, useState } from "react";

export default function Grid() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const cardColour = 'rgb(228, 242, 253)';

    useEffect(() => {
        const baseurl = 'https://rickandmortyapi.com/api/character';
    
        axios.get(baseurl).then((response) => {

          console.log(response.data.results);  
          setCharacters(response.data.results);
          setFilteredCharacters(response.data.results);
        }).catch((error) => {
            console.error("Error fetching data:", error);});
      }, [])

      useEffect(() => {
        setFilteredCharacters(
            characters.filter((character) =>
                character.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, characters]);


return (
    <>
        <div className="container">
            
        <input
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
        />
        {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
                <div className="card" key={character.id} style={{ backgroundColor: cardColour }}>
                    <h2>{character.name}</h2>
                    <p><b>Species: </b>{character.species}</p>
                    <p><b>Status: </b>{character.status}</p>
                    <p><b>Origin: </b>{character.origin.name}</p>
                    <p><b>Location:</b> {character.location.name}</p>
                    <p><b>No. of Episodes: </b> {character.episode.length}</p>
                    <img src={character.image} alt={character.name}></img>
                </div>
            ))
        ) : (
            <div className="card no-results" style={{ backgroundColor: cardColour }}>
                <h2>No results found</h2>
            </div>
        )}
    </div>
    </>
)
}