import {Link} from "react-router-dom"
import { FaPaw } from "react-icons/fa";

export default function NavBar() {
    return (
      <nav className="flex justify-end px-3">
        <FaPaw className="fill-electric-blue" />
        <h1 
            className="font-display font-bold text-7xl text-center text-rich-black">
            DoggoGram
        </h1>
        <FaPaw className="fill-electric-blue" />
        <Link to="/" className="font-primary">
          Gallery
        </Link>
      </nav>
    );
}