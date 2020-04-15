import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = () => {
  return (
    <div className="">
      <p className="f3 white">
        {'Entre here Your Image link and it will mark the faces in it'}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input className="f4 pa2 w-80 center" type="tex" />
          <button className="w-20 grow f4 link ph3 pv2 dib white bg-green">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

