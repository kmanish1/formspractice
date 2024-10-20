import { Link } from "react-router-dom";

const Navbar=function(){
    return (
      <div className="flex justify-evenly bg-gray-400 p-5">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    );
}
export default Navbar;