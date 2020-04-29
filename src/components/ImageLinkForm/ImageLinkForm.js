import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 white">
        {'Entre here an Image URL, And it will identify the colors in it'}
      </p>
      <div className="center">
        <div className="center form pa4 shadow-5 ba b--transparent br4">
          <input
            className="f4 pa2 w-80 center ba b--white bb bl bt br3"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="w-20 grow f4 link ph3 pv2 dib white bg-green ba b--green"
            onClick={onButtonSubmit}
          >
            GO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
