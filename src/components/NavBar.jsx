import {Link} from "react-router-dom"

export default function NavBar() {
    return(
        <nav className="flex justify-end px-3">
            <Link to="/" className="font-primary">Home</Link>
        </nav>
    )
}