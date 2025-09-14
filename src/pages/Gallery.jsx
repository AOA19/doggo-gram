// import Button from "../components/Button"
import { useState, useEffect } from "react";
import { getDogImages, getImageById } from "../services/dogApi";
import {Link} from "react-router-dom"

export default function Gallery() {
  const [dogImages, setDogImages] = useState([]);
  const [breedNames, setBreedNames] = useState(null); 

  useEffect(()=> {
    async function fetchDogImages(){
      try{
        // get all breeds
        // const breeds = await getAllBreeds();

      // // shuffle random 9 breeds
      //   const shuffledBreeds = breeds.sort(() => 0.5 - Math.random());
      //   const selectedBreeds = shuffledBreeds.slice(0, 9)

      //   const dogImages = [];
      //   for(const breed of selectedBreeds) {
      //     const dogImage = await getImageForBreed(breed.id);

      //     dogImages.push({
      //       id: breed.id,
      //       name: breed.name,
      //       // tempermant: breed.tempermant,
      //       imageUrl: dogImage.url
      //     });
      //     console.log(dogImages)
      //   }
      //   setDogs(dogImages);
      
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
      {/* Render data here */}
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
