import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getImageById } from "../services/dogApi";
import NavBar from "../components/NavBar"

export default function Post() {

    const {id} = useParams();
    const [dog, setDog] = useState(null);

    useEffect(()=> {
        async function fetchDog() {
            try{
                const dogImage = await getImageById(id);
                const breedInfo = dogImage.breeds[0];
                setDog({
                  id: dogImage.id,
                  imageUrl: dogImage.url,
                  name: breedInfo.name,
                  temperament: breedInfo.temperament,
                  lifeSpan: breedInfo.life_span
                });
            } catch (error) {
                console.error("Error fetching dog post:", error)
            }
        }
        fetchDog();
    }, [id])

    if(!dog) return <p>Loading...</p>;

    return (
      <div className="min-h-screen bg-jonquil-yellow px-6 pb-8">
        <NavBar />
        <h1 className="text-4xl font-primary font-semibold text-center pb-4 text-rich-black">{dog.name}</h1>
        <div className="flex justify-center">
          <img src={dog.imageUrl} alt={dog.name} className="w-80 h-80 lg:w-160 lg:h-160" />
        </div>
        <div className="lg:text-center lg:pb-16">
          <p className="font-primary font-medium pt-8 px-6 text-2xl lg:text-3xl text-rich-black">I'm... {dog.temperament}</p>
          <p className="font-primary font-medium pt-8 px-6 text-2xl lg:text-3xl text-rich-black">I live for {dog.lifeSpan}</p>
        </div>
      </div>
    );
}