import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="">
      <p className="f3 white">
        {
          'Entre here URL of an Image, And it will identify the colors in it'
        }
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-80 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="w-20 grow f4 link ph3 pv2 dib white bg-green"
            onClick={onButtonSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
