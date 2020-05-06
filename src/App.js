import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ColorRecognition from './components/ColorRecognition/ColorRecognition';
import ColorsList from './components/ColorsList/ColorsList';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const initialState = {
  input: '',
  imageUrl: '',
  colors: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '0',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateColors = (data) => {
    const clarifaiColors = data.outputs[0].data.colors;
    let colorList = [];
    for (let i = 0; i < clarifaiColors.length; i++) {
      let color = [
        clarifaiColors[i].w3c.hex,
        clarifaiColors[i].w3c.name,
        clarifaiColors[i].value,
      ];
      colorList.push(color);
    }
    return colorList;
  };

  displayColors = (colors) => {
    this.setState({ colors: colors });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('https://rocky-savannah-60468.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch('https://rocky-savannah-60468.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }

        this.displayColors(this.calculateColors(response));
      })
      .catch((err) => console.log(err));
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route, imageUrl, colors } = this.state;
    return (
      <div className="App">
        <div className="topBar ma4">
          <Logo />
          <Navigation
            isSignedIn={isSignedIn}
            onRouteChange={this.onRouteChange}
            route={route}
          />
        </div>
        {route === 'home' ? (
          <div>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <div>
              <ColorRecognition imageUrl={imageUrl} />
              <ColorsList colors={colors} />
            </div>
          </div>
        ) : route === 'signin' ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
        <footer className="f5 white">
          Made with{' '}
          <a className="blue" href="https://www.clarifai.com/">
            Clarifai
          </a>{' '}
          api
        </footer>
      </div>
    );
  }
}

export default App;
