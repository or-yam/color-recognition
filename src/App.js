import React, { useState } from 'react';

export default function AppFunc() {
  const [user, setUser] = useState({
    id: '0',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  });
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [colors, setColors] = useState([]);
  const [isSignin, setIsSignin] = useState(false);
  const [route, setRoute] = useState('signin');

  const onRouteChange = route => {
    if (route === 'signout') {
      setRoute('signin');
    }
    if (route === 'home') {
      setIsSignin(true);
    }
    setRoute(route);
  };

  const loadUser = ({ id, name, email, entries, joined }) => {
    setUser({
      id,
      name,
      email,
      entries,
      joined
    });
  };

  const calculateColors = ({ outputs }) => outputs[0].data.colors.map(({ w3c, value }) => [w3c.hex, w3c.name, value]);

  const displayColors = colors => {
    setColors(colors);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    fetch('https://rocky-savannah-60468.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://rocky-savannah-60468.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              setUser({ ...user, entries: count });
            })
            .catch(console.log);
        }

        displayColors(calculateColors(response));
      })
      .catch(err => console.log(err));
  };

  const onInputChange = event => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="topBar ma4">
        <Logo />
        <Navigation isSignin={isSignin} onRouteChange={onRouteChange} route={route} />
      </div>
      {route === 'home' && (
        <div>
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
          <div>
            <ColorRecognition imageUrl={imageUrl} />
            <ColorsList colors={colors} />
          </div>
        </div>
      )}
      {route === 'signin' ? (
        <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
      <footer className="f5 white">
        Made with
        <a className="blue" href="https://www.clarifai.com/">
          Clarifai
        </a>
        api
      </footer>
    </div>
  );
}
import React, { useState } from 'react';

export default function AppFunc() {
  const [user, setUser] = useState({
    id: '0',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  });
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [colors, setColors] = useState([]);
  const [isSignin, setIsSignin] = useState(false);
  const [route, setRoute] = useState('signin');

  const onRouteChange = route => {
    if (route === 'signout') {
      setRoute('signin');
    }
    if (route === 'home') {
      setIsSignin(true);
    }
    setRoute(route);
  };

  const loadUser = ({ id, name, email, entries, joined }) => {
    setUser({
      id,
      name,
      email,
      entries,
      joined
    });
  };

  const calculateColors = ({ outputs }) => outputs[0].data.colors.map(({ w3c, value }) => [w3c.hex, w3c.name, value]);

  const displayColors = colors => {
    setColors(colors);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    fetch('https://rocky-savannah-60468.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://rocky-savannah-60468.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              setUser({ ...user, entries: count });
            })
            .catch(console.log);
        }

        displayColors(calculateColors(response));
      })
      .catch(err => console.log(err));
  };

  const onInputChange = event => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="topBar ma4">
        <Logo />
        <Navigation isSignin={isSignin} onRouteChange={onRouteChange} route={route} />
      </div>
      {route === 'home' && (
        <div>
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
          <div>
            <ColorRecognition imageUrl={imageUrl} />
            <ColorsList colors={colors} />
          </div>
        </div>
      )}
      {route === 'signin' ? (
        <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
      <footer className="f5 white">
        Made with
        <a className="blue" href="https://www.clarifai.com/">
          Clarifai
        </a>
        api
      </footer>
    </div>
  );
}
