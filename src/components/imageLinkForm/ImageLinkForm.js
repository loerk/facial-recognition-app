import React from "react";
import "./ImageLinkForm.css";


function ImageLinkForm({ onInputChange, onButtonSubmit }) {

  return (
    <div>
      <p className="center f3">
        {"Those magnifying Glass will detect faces in your pictures"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f3 pa2 w-70" type="text" name="" id="" onChange={onInputChange} />
          <button onClick={onButtonSubmit} className="w-30 grow f4 link dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
