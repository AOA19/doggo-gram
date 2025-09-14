import { FaPaw } from "react-icons/fa";

export default function Logo(){
    return (
      <div className="flex items-center ">
        <FaPaw className="fill-electric-blue text-lg " />
        <h1 className="font-display font-bold text-4xl text-center text-rich-black px-2">DoggoGram</h1>
        <FaPaw className="fill-electric-blue text-lg" />
      </div>
    );
}