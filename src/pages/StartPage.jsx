import Button from "../components/Button"
import { FaPaw } from "react-icons/fa";

export default function StartPage() {
  return (
    <div className="min-h-screen bg-apple-green">
      {/* Heading */}
      <FaPaw className="fill-electric-blue" />
      <h1 className="font-display font-bold text-7xl text-center text-rich-black">Pup Quiz</h1>
      <FaPaw className="fill-electric-blue" />
      <div className="flex flex-col items-center">
        <div>
          <img 
          src="src/assets/dog-book.svg"
          alt="A cartoon corgi with glasses reading a book"
          />
        </div>
        <div>
          <h2 className="font-primary font-medium text-4xl text-center text-rich-black">Think you know your pups? Prove it!</h2>
          <p className="font-primary text-2xl text-center text-rich-black">Take this quick quiz and see if you’re a true dog breed expert.</p>
          <div className="flex justify-center">
          <Button to="/quiz" className="bg-electric-blue">Start Quiz</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
