import  React, {useState} from "react";

function Search({ searchPlants }) {
 const [form, setForm] = useState("")



 function handleChange(e) {
  searchPlants(e.target.value)
  setForm(e.target.value)
  
 }


  return (
    <div className="searchbar" >
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={form}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
