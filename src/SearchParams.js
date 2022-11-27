import { useState, useEffect } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const locationTuple = useState("");
  const location = locationTuple[0];
  const setLocation = locationTuple[1];

  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  useEffect(function() {
    requestPets();
    // return () => clear if you have to do any clean up
  },[]); 
  // if you pass in [animal] only request pets when animal state changes,
  // if you pass in [] then it will be only called once and never again.


  async function requestPets() {
    console.log(`pets requested ${location}`);
    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=
        ${location}&breed=${breed}`
    );

    const json = await res.json();
    console.log(json);

    setPets(json.pets);
  }


  // const [location, setLocation] = useState("Patna"); same as above ^

  function updateLocation(e) {
    console.log(e.target.value);
    setLocation(e.target.value);
  }


  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={updateLocation}
            value={location.toUpperCase()}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animals">
          Animals
          <select
            id="animals"
            value={animal}
            onChange={(e) => {
                console.log("animal change"+ e.target.value);
              setAnimal(e.target.value);
            }}
            onBlur={(e) => { 
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animal) => {
              //console.log("hi :" + animal);
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <div>
        {pets.map( pet => {
            console.log(pet.name);
            return (<text>{pet.name}</text>);
        })}
      </div>
      <button type="button" onClick={requestPets}>Submit</button>
      </form>
     </div>
  );
};

export default SearchParams;
