import { useState } from "react";


export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = event => {
      const {value} = event.target;
      setId(value);
   }

   const handleSearch = () => {
      props.onSearch(id);
      setId('');
   }
   return (
      <div className="searchb"> 
      
   <input   type ="text"
            name="search" 
            value={id}
            id="search"
            onChange={handleChange}
          />
         <button onClick={handleSearch}>Agregar</button> 
      </div>
   );
}
