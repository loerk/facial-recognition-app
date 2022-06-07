import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import particleOptions from "./particles.json";
import "./App.css";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useState, useCallback } from "react";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import SignIn from "./components/signin/SignIn";
import Register from "./components/register/Register";
//const API_KEY = "3ca8bc5c07014ad5a2eca15b88471f5c"

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("SIGNIN");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const onButtonSubmit = () => {
    setImageUrl(input);
    const APP_ID = "6021a5a5b532451f935c87aa145697a7";
    const USER_ID = "1g9t1f5wnqxr";
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
    const MODEL_ID = "face-detection";
    const PAT = "3ca8bc5c07014ad5a2eca15b88471f5c";
    const IMAGE_URL = input;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => displayFaceBox(calculateFaceLocation(result)))
      .catch((error) => console.log("error", error));
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);
    //dom manipulation to grab created Image
    const image = document.getElementById("inputImage");
    //data is giving position as percentage of the image
    // .22 -> 20% of the image
    // we need the image size to calc the position in %
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      // calculates the dots of the box
      //left_col is percentage of the width
      leftCol: clarifaiFace.left_col * width, //we get the actual width and where the left col should be
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width, //actual width - the width where the col is
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onRouteChange = (route) => {
    if (route === "SIGNOUT") {
      setIsSignedIn(false);
    } else if (route === "HOME") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "HOME" ? (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition imageURL={imageUrl} box={box} />
        </div>
      ) : route === "SIGNIN" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register />
      )}
    </div>
  );
}

export default App;
