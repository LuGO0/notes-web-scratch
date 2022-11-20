import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const locationTuple = useState("Patna");
  const location = locationTuple[0];
  const setLocation = locationTuple[1];

  const [animal, setAnimal] = useState("foox");

  // const [location, setLocation] = useState("Patna"); same as above ^

  function updateLocation(e) {
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
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animal) => {
              console.log("hi :" + animal);
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
