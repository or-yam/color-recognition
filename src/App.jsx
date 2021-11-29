import React, { useState } from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ColorRecognition from './components/ColorRecognition/ColorRecognition';
import ColorsList from './components/ColorsList/ColorsList';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import { getColorsFromUrl, increaseUserEntries } from './api';
import './App.css';

export default function AppFunc() {
  const [user, setUser] = useState({
    id: '',
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

  const calculateColors = colors => colors.map(({ w3c, value }) => [w3c.hex, w3c.name, value]);

  const onButtonSubmit = async e => {
    e.preventDefault();
    setImageUrl(input);
    const colors = await getColorsFromUrl(input);
    colors && setColors(calculateColors(colors));
    if (user.id) {
      const entries = await increaseUserEntries(user.id);
      setUser({ ...user, entries });
    }
  };

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const renderHomePage = () => (
    <>
      <Rank name={user.name || 'Guest'} entries={user.entries} />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      {imageUrl && (
        <div>
          <ColorRecognition imageUrl={imageUrl} />
          <ColorsList colors={colors} />
        </div>
      )}
    </>
  );

  return (
    <div className="App">
      <header className="topBar ma4">
        <Logo />
        <Navigation isSignin={isSignin} onRouteChange={onRouteChange} route={route} />
      </header>
      {route === 'home' && renderHomePage()}
      {route === 'signin' && <Signin loadUser={loadUser} onRouteChange={onRouteChange} />}
      {route === 'register' && <Register loadUser={loadUser} onRouteChange={onRouteChange} />}
      <Footer />
    </div>
  );
}
