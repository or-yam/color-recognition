import React, { useState } from 'react';
import { signin } from '../../api';

const Signin = ({ loadUser, onRouteChange }) => {
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  const onSubmitSignin = async e => {
    e.preventDefault();
    const user = await signin(signinEmail, signinPassword);
    !user.id && alert('Check your Email or Password');
    loadUser(user);
    onRouteChange('home');
  };

  return (
    <form onSubmit={onSubmitSignin} className=" br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 near-white">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 near-white" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={e => setSigninEmail(e.target.value)}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                required
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" htmlFor="password">
                Password
              </label>
              <input
                onChange={e => setSigninPassword(e.target.value)}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
          </fieldset>
          <div className="">
            <input
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
    </form>
  );
};

export default Signin;
