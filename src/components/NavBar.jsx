import {Link} from "react-router-dom"
import Logo from "./Logo"

export default function NavBar() {
    return (
      
      <nav className="flex justify-between items-center pt-8 pb-16 text-xl lg:text-2xl">
      <Logo/>
        <Link to="/" className="font-primary text-rich-black hover:underline">
          Gallery
        </Link>
      </nav>
    );
}