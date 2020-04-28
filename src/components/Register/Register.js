import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerName: '',
      registerEmail: '',
      registerPassword: '',
    };
  }

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitRegister = () => {
    fetch('https://rocky-savannah-60468.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } // else ... display text user already exist
      });
  };

  render() {
    return (
      <div>
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 near-white">Register</legend>
                <div className="mt3">
                  <label
                    className="db fw6 lh-copy f6 near-white"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    onChange={this.onNameChange}
                    type="email"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="mt3">
                  <label
                    className="db fw6 lh-copy f6 near-white"
                    htmlFor="email-address"
                  >
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    onChange={this.onEmailChange}
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6 white" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    onChange={this.onPasswordChange}
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitRegister}
                  className="b ph3 pv2 input-reset ba b--black bg-green grow pointer f6 dib br4 near-white f1"
                  type="submit"
                  value="Submit And Sign-Up"
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
