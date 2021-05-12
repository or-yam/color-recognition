import React, { useState } from 'react';

const Signin = ({ loadUser, onRouteChange }) => {
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  const onEmailChange = event => {
    setSigninEmail(event.target.value);
  };

  const onPasswordChange = event => {
    setSigninPassword(event.target.value);
  };

  const onSubmitSignin = () => {
    fetch('https://rocky-savannah-60468.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signinEmail,
        password: signinPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user);
          onRouteChange('home');
        } else {
          return alert('Check your Email or Password');
        }
      });
  };

  return (
    <article className=" br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 near-white">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 near-white" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
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
                onChange={onPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onSubmitSignin}
              className="b ph3 pv2 input-reset ba b--black bg-green grow pointer f6 dib br4 near-white f1"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange('register')}
              href="#0"
              className="b ph3 pv2 input-reset ba b--black bg-blue grow pointer f6 dib br4 near-white f1 "
            >
              Register As New User
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;
