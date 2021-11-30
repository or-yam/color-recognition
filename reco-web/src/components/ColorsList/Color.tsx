function Color({ hex, name, amount, demo }: ColorProps) {
  return (
    <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5 ">
      <div className=" w3 h3 center br3 shadow-4" style={{ backgroundColor: demo }} />
      <div>
        <h2>{name}</h2>
        <h2>{hex}</h2>
        <h2>{amount}</h2>
      </div>
    </div>
  );
}

export default Color;

type ColorProps = {
  hex: string;
  name: string;
  amount: string;
  demo: string;
};
