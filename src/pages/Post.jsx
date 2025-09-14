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
                  temperament: breedInfo.temperament
                });
            } catch (error) {
                console.error("Error fetching dog post:", error)
            }
        }
        fetchDog();
    }, [id])

    if(!dog) return <p>Loading...</p>;

    return (
      <div className="min-h-screen bg-apple-green">
        <NavBar />
        <h1 className="text-2xl font-primary font-semibold">{dog.name}</h1>
        <div className="flex justify-center">
          <img src={dog.imageUrl} alt={dog.name} className="w-40 h-40" />
        </div>
        <div>
          <p className="font-primary font-medium">Temperament:{dog.temperament}</p>
        </div>
      </div>
    );
}