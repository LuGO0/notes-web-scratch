import {useState, useEffect} from "react";



export default function useBreedList(animal) {

    const [breedList, setBreedList] = useState([]);
    // I am leaving the status part for now
    // const [status, setStatus] = useState("")


    useEffect(() => {
        if(!animal) {
            setBreedList([]);
        } else {
            setBreedList([]); // just to avoid inconsistencies
            setBreedList(fetchBreedList(animal))
        }
        
    }, [animal]);

    return [breedList]; // no second element status
}

async function fetchBreedList(animal) {
    //setBreedList([]);
    console.log(`Breeds requested : ${animal}`);
    const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );

    const json = await res.json();
    console.log(json);

    //setBreedList(json.breeds);

    //return breedList;
  }
