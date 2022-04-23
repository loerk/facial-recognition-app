import React from "react";
import "./ImageLinkForm.css";


function ImageLinkForm() {
  const API_KEY = "3ca8bc5c07014ad5a2eca15b88471f5c"
  const APP_ID = "6021a5a5b532451f935c87aa145697a7"
  const USER_ID = "1g9t1f5wnqxr"
  const MODEL_VERSION_ID = "7b26e447627d4b098dcf9277a79a78e8"
  const MODEL_ID = "7fd43ae450cb29e0b9f51aa5c44801d9"

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": { USER_ID },
      "app_id": { APP_ID }
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg"
          }
        }
      }
    ]
  });
  console.log(raw)
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Key ${API_KEY}`
    },
    body: raw
  };

  fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data))
    .catch(error => console.log('error', error));





  const handleInput = (e) => {
    console.log(e.target.value);
  };

  const onButtonSubmit = () => {
    console.log('click')
  }
  return (
    <div>
      <p className="center f3">
        {"Those magnifying Glass will detect faces in your pictures"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f3 pa2 w-70" type="text" name="" id="" onChange={handleInput} />
          <button onClick={onButtonSubmit} className="w-30 grow f4 link dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
