import {Link} from "react-router-dom"

export default function Button({children, onClick, className = "", to}) {

    // Base btn style
    const btnBase = "rounded-full font-primary font-semibold text-xl px-6 py-2 text-rich-black";

    // classes that will added based on where btn is placed + btn base
    const customClasses = `${btnBase} ${className}`;

    // if a link is needed for btn
    if (to) {
        return (
            <Link to={to} className={customClasses}>
                {children}
            </Link>
        )
    }
    //otherwise regular button 
    return(
            <button onClick={onClick} className={customClasses}>
                {children}
            </button>
        
    )
}