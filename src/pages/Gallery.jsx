import { useState, useEffect } from "react";
import { getDogImages } from "../services/dogApi";
import {Link} from "react-router-dom"
import NavBar from "../components/NavBar";

export default function Gallery() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(()=> {
    async function fetchDogImages(){
      try {
        const images = await getDogImages();
        setDogImages(images.slice(0,9));
       
      } catch (error) {
        console.error("Error fetching dogs:" , error)
      }
    }
    fetchDogImages()
  }, [])

  if (!dogImages) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-apple-green px-6 pb-8">
      <NavBar />
      <div className="grid grid-cols-3 justify-items-center">
        {dogImages.map((dog) => (
          <Link to={`/post/${dog.id}`} key={dog.id}>
            <div className="hover:border-6 hover:border-solid hover:border-electric-blue">
              <img src={dog.url} alt="dog" className=" w-61 h-62 object-cover" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
