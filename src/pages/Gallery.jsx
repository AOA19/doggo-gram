import { useState, useEffect } from "react";
import { getDogImages } from "../services/dogApi";
import {Link} from "react-router-dom"

export default function Gallery() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(()=> {
    async function fetchDogImages(){
      try {
        const images = await getDogImages();
        setDogImages(images)
       
      } catch (error) {
        console.error("Error fetching dogs:" , error)
      }
    }
    fetchDogImages()
  }, [])

  if (!dogImages) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-apple-green grid grid-cols-3">
      {dogImages.map((dog) => (
      <Link to={`/post/${dog.id}`} key={dog.id}>
        <div key={dog.id} className="">
          <img 
            src={dog.url} 
            alt="dog"
            className="h-48" />
        </div>
      </Link>
      ))}
    </div>
  );
}
