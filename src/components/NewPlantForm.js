import  React, {useState} from "react";

function NewPlantForm({ addPlant }) {
  const [form, setForm] = useState({
    name:"",
    image:"",
    price:""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "Post", 
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(form),
    })
    .then((res) => {
      if (res.ok){
        return res.json();
      } else {
        throw Error("The post did not complete")
      }
    })
    .then((data) => {
      addPlant(data);
    })
    setForm({
      name:"",
      image:"",
      price:""
    })
    .catch((err) => console.error("Server was not obtained"))
  };



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" value ={form.name}  onChange={(e) => handleChange(e)} name="name" placeholder="Plant name" />
        <input type="text" value ={form.image} onChange={(e) => handleChange(e)} name="image" placeholder="Image URL" />
        <input type="number" value ={form.price} onChange={(e) => handleChange(e)} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
