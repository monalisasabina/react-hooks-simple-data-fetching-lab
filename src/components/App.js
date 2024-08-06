// create your App component here

import { useEffect, useState } from "react"

function App(){

    // const[dogImage,setDogImage]=useState(null)
    // const[isLoaded,setIsLoaded]=useState([false])

    // useEffect(()=> {
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then((response) => response.json())
    //     .then((data) => {

    //         console.log(data.message);
    //         setDogImage(data.message);
    //         setIsLoaded(true)

    //   })
    // },[])

    // if (!isLoaded) return <h3>Loading...</h3>;

    // return(

    //     <>
    //      <img src={dogImage} alt="A Random Dog" />
         
    //     </>
    // )


    //Kwani, do I have to do what the "solution" does to pass the test and yet mine works the same way!!!

  const [dogPic, setDogPic] = useState(null);

    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
      });
   }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  if (!dogPic) return <p>Loading...</p>;

  return <img src={dogPic} alt="A Random Dog" />;

   



}

export default App