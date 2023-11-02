import React, { useState , useEffect} from "react";
import '../app/globals.css';
import Header from './header';
import Image from "next/image";
const Form = () => {
  const [formdata, setFormData] = useState({ image: null, Title: "", Price: "" });
  const [data, setData] = useState([]);



 useEffect ( () => {

  const fetchData =  async () => {

    try {

      const response = await fetch('http://20.197.16.153:4000/kitchen')
      const data = await response.json();
   

      setData(data);
      
    } catch (error) {
      
      console.error('Unable to fetch data from Mongodb', error);
    }
  }
  fetchData();
 } ,[]); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("Title", formdata.Title);
    formDataToSend.append("Price", formdata.Price);
    formDataToSend.append("image", formdata.image);

    try {
      const response = await fetch('http://20.197.16.153:4000/kitchen', {
        method: "POST",
        body: formDataToSend,
      });
      alert('Data added successfully')
      window.location.reload(); 
    } catch (error) {
      console.error("Not able to add data", error);
    }

    setFormData({ Title: "", Price: "", image: "" });
  };


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://20.197.16.153:4000/kitchen/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        alert('Data deleted successfully');
        window.location.reload(); 
      } else {
        console.error('Error deleting item:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  

if(data)
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center py-10">
        <div className="text-2xl text-center">Please make sure you upload only Kitchen tiles here</div>

        <form className="justify-center space-y-12 mt-20 mb-20" onSubmit={handleSubmit}>
          <div className="text-center">
            Image:
            <input
              type="file"
              onChange={(e) =>
                setFormData({ ...formdata, image: e.target.files[0] })
              }
              name="image"
            />
          </div>
          <div className="text-center">
            Title:
            <input
              type="text"
              value={formdata.Title}
              onChange={(e) =>
                setFormData({ ...formdata, Title: e.target.value })
              }
              name="Title"
              className="w-96 h-10 text-black p-2"
            />
          </div>
          <div className="text-center">
            Price:
            <input
              type="number"
              name="Price"
              onChange={(e) =>
                setFormData({ ...formdata, Price: e.target.value })
              }
              value={formdata.Price}
              className="w-96 h-10 text-black p-2"
            />
          </div>

          <div className="text-center">
            <button
              className="bg-white text-black items-center w-20 rounded-md"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center">
  {data.map((Kitchen) => (
    <div key={Kitchen._id} className="m-4">
      <div>
        <Image src={`data:image/jpeg;base64,${Kitchen.image}`} alt="Image" className="w-auto h-96 pb-4" />
        <div className="text-center text-xl pb-2">{Kitchen.Title}</div>
        <div className="text-center pb-2">{Kitchen.Price}</div>
        <button onClick={() => handleDelete(Kitchen._id)} className="ml-[85px]">
          Delete
        </button>
      </div>
    </div>
  ))}
</div>


         
      </div>
      
    </div>
    
  );
};

export default Form;