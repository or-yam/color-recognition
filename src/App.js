import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ColorRecognition from './components/ColorRecognition/ColorRecognition';
import ColorsList from './components/ColorsList/ColorsList';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: 'b23840034d974b6cbb3754006c99f90b',
});
const particlesParameters = {
  particles: {
    number: {
      value: 52,
      density: { enable: true, value_area: 789.1476416322727 },
    },
    color: { value: '#115fa4' },
    shape: {
      type: 'triangle',
      stroke: { width: 0, color: '#1d37b1' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#fff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      colors: [],
      route: 'signin',
      isSignedIn: false,
    };
  }

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
    app.models
      .predict(Clarifai.COLOR_MODEL, this.state.input)
      .then((response) => this.displayColors(this.calculateColors(response)))
      .catch((err) => console.log(err));
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route, imageUrl, colors } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesParameters} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
          route={route}
        />
        <Logo />
        {route === 'home' ? (
          <div>
            <Rank />
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
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
