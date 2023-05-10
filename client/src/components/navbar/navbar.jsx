import "./navbar.css";
import { Link } from "react-router-dom";
import { resetCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Navbar() {

  const dispatch = useDispatch();
  const handleResetCountries = () => {
    dispatch(resetCountries());
  };
  
  return (
    <div className="search-box">      
      <Link to="/">
        <button className="button-nav">Main</button>
      </Link>  
      <Link to="/home">
        <button className="button-nav" onClick={handleResetCountries}>Home</button>
      </Link>
      <Link to="/form">
        <button className="button-nav">Add Activities</button>
      </Link>                  
    </div>
  );
}
