import { useLocation } from "react-router-dom";

export default function Footer(){
    const location = useLocation();

    const changeBgColor = () => {
        if (location.pathname === "/") return "bg-apple-green";
        if (location.pathname.startsWith("/post")) return "bg-jonquil-yellow";
    };

    return (
      <footer className={`${changeBgColor()} py-4 border-t-1 border-rich-black`}>
        <p className="text-center font-display font-medium text-rich-black">
          Designed & Developed by
          <a href="https://github.com/AOA19/doggo-gram" className="hover:underline hover:font-semibold">
            {" "}
            A0A19
          </a>
        </p>
      </footer>
    );
}