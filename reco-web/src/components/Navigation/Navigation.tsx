function Navigation({ onRouteChange, isSignedIn, route }: Props) {
  if (isSignedIn && route === 'home') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => onRouteChange('signout')}
          className="ma2 b ph3 pv2 input-reset ba b--black bg-orange grow pointer f5 dib br4 near-white f1"
        >
          Sign Out
        </button>
      </nav>
    );
  }

  if (isSignedIn === false && route === 'signin') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
        <p className="f2 fw6 ph0 mh0 white">COLOR IDENTIFIER</p>
        <p className="f4 fw6 ph0 mh0 light-blue">
          This App will show density values for up to 8 dominant colors present in images.
          <br />
          Color predictions are returned in hex format.
        </p>
      </nav>
    );
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        type="button"
        onClick={() => onRouteChange('signin')}
        className="b ph3 pv2 input-reset ba b--black bg-blue grow pointer f5 dib br4 near-white f1"
      >
        Back To Sign In
      </button>
    </nav>
  );
}

export default Navigation;

type Props = {
  onRouteChange: (route: string) => void;
  isSignedIn: boolean;
  route: string;
};
