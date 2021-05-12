import React, { useState } from 'react';
import { register } from '../../api';

const Register = ({ loadUser, onRouteChange }) => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const onSubmitRegister = async () => {
    const user = await register(registerName, registerEmail, registerPassword);
    !user.id && alert('This User is already exist in the system.');
    loadUser(user);
    onRouteChange('home');
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 near-white">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 near-white" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                onChange={e => setRegisterName(e.target.value)}
                type="email"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 near-white" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                onChange={e => setRegisterEmail(e.target.value)}
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
                onChange={e => setRegisterPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onSubmitRegister}
              className="b ph3 pv2 input-reset ba b--black bg-green grow pointer f6 dib br4 near-white f1"
              type="submit"
              value="Submit And Sign-Up"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
