# DoggoGram

## Overview 
DoggoGram is an Instagram-inspired dog photo gallery that utilizes [TheDog API](https://docs.thedogapi.com/) to fetch and display adorable dog images. Users can browse a gallery of random dogs and click on an image to view more details about that specific pup.

## Features
- Dog Gallery: Fetches a grid of random dog images from the Dog API.

- Dynamic Routing: Click on a dog image to navigate to a dedicated post page with details for that specific dog.

- Custom Styling: Tailored design using Tailwind CSS, including unique background colors for different pages.

- Responsive Design: Built with a mobile-first approach for seamless browsing across devices.

## Running The Project

1. Clone the Repository 

```
git clone git@github.com:AOA19/doggo-gram.git
```

2. Navigate to Project Directory 
```
cd doggo-gram
```

3. Install Dependencies 
```
npm install
```

4. Create a ``.env`` file in the root directory and add the API key
```
VITE_DOG_API_KEY= "your_api_key"
```

5. Start the Server
```
npm run dev
```

6. Open application in your preferred web browser and navigate to the local host address displayed in your terminal.

7. Build and Deploy
```
npm run build
```

## Technologies Used
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/en/main)
- [TheDog API](https://docs.thedogapi.com/)