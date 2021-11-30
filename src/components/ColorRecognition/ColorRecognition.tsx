const ColorRecognition = ({ imageUrl }: { imageUrl: string }) => (
  <div className="center ma mt2">
    <img id="inputImage" width="500px" height="auto" alt="color-box" src={imageUrl} />
  </div>
);

export default ColorRecognition;
