import React, { useState } from "react";

function PlantCard({plant, deletePlant}) {
  const [inStock, setInStock] = useState(true)

  const toggleAvailable = () => {
     setInStock(prev => !prev)
   }

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`,{
    method: "DELETE"
  })
  .then(res => {
    if(res.ok){
    deletePlant(plant.id)
    } else {
      throw Error ("DELETE was not completed")
    }
  })
  .catch(err => console.error("Was not able to reach to the server"))
}


  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleAvailable}>In Stock</button>
      ) : (
        <button onClick={toggleAvailable}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
