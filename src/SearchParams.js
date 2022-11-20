 import { useState } from "react";
 
 const SearchParams = () => {

    const locationTuple = useState("Patna");
    const location = locationTuple[0];
    const setLocation = locationTuple[1];


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
                    placeholder="Location"/>
                </label>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
 };

 

 export default SearchParams;
