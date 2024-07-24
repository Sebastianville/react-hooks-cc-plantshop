import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")



const addPlant = (newPlant) => {
  setPlants([...plants, newPlant])
}

const searchPlants = (lookForPlants) => {
  setSearch(lookForPlants)
}

const filterPlantNames = plants.filter(element => {
  if(element.name.toLowerCase().includes(search.toLowerCase())){
    return true 
  } else {
  return false 
  }
})


const deletePlant = (id) => {
  setPlants(plants.filter((plant) => {
    if (plant.id === id){
      return false; 
    } else {
      return true;
    }
  }));
};



  const url = 'http://localhost:6001/plants'

  useEffect(() => {
    fetch(url)
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        throw Error("JSON did not compelte")
      }
    })
    .then(data => setPlants(data))
    .catch(err => console.error("Could not get to the server"))
  }, [])



  return (
    <div className="app">
      <Header />
      <PlantPage plants={filterPlantNames} addPlant={addPlant} searchPlants={searchPlants}   deletePlant={deletePlant}/>
    </div>
  );
}

export default App;
