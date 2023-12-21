import SearchBar from "../searchbar/SearchBar";
import './nav.css'
import { Link } from "react-router-dom";



export default function Nav(props){
    return (  
    
        <div className="nav">
        
        <SearchBar onSearch={props.onSearch}/>
        <hr/>
        <Link to="/home">
        <button>Home</button>
       
        </Link>
        
        <Link to="/favorites">
        <button>Favorites</button>
       
        </Link>
        
        <Link to="/about"> 
        
        <button>About</button>
        <button onClick={props.logOut}>LogOut</button>
        </Link>
        
        </div>
    );
 }
