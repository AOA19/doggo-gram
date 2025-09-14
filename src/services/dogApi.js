const url = "https://api.thedogapi.com/v1";
const apiKey = import.meta.env.VITE_DOG_API_KEY;

export async function getDogImages() {
    const res = await fetch(`${url}/images/search?limit=9&has_breeds=true&mime_types=jpg,png&size=med`, {
        headers: {"x-api-key": apiKey}
    });

    if (!res.ok) throw new Error("Failed to fetch dog images");
    return res.json();
}


export async function getImageById(imageId) {
    const res = await fetch(`${url}/images/${imageId}`, {
      headers: { "x-api-key": apiKey },
    });

    if(!res.ok) throw new Error("Failed to fetch image id");
    return res.json();
}