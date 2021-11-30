const Rank = function ({ name, entries }: Props) {
  const capitalFirst = (str: string): string => str[0].toUpperCase() + str.slice(1);

  if (!entries) {
    return (
      <div className="white f3">
        Welcome
        <span className="white f2">{` ${capitalFirst(name)}`}</span>
        {` , You Are Ready To Start`}
        <p>
          For inspiration click{' '}
          <a
            className="f3 blue"
            href="https://pixabay.com/images/search/colors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="white f3">
        <span className="white f2">{`${capitalFirst(name)}`}</span>
        {` , You identified colors for:`}
      </div>
      <div className="white f2">{`${entries} Images !`}</div>
    </>
  );
};

export default Rank;

type Props = {
  name: string;
  entries: number;
};
