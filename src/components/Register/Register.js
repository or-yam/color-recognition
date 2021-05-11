import React from 'react';

const Register = ({ loadUser, onRouteChange }) => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const onNameChange = event => {
    setRegisterName(event.target.value);
  };

  const onEmailChange = event => {
    setRegisterEmail(event.target.value);
  };

  const onPasswordChange = event => {
    setRegisterPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    fetch('https://rocky-savannah-60468.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user);
          onRouteChange('home');
        } else {
          return alert('This User is already exist in the system.');
        }
      });
  };

  return (
    <div>
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
                  onChange={onNameChange}
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
                  onChange={onEmailChange}
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
                  onChange={onPasswordChange}
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
    </div>
  );
};

export default Register;
