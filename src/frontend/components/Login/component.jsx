import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';

import './styles.scss';

const App = ({ onLogin }) => {
  const formRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const { email } = serialize(formRef.current, { hash: true });
    return email && onLogin(email);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <form
          className="form"
          ref={formRef}
          onSubmit={submit}
        >
          <h1 className="title">Login / SignUp:</h1>
          <input className="input" name="email" type="email" placeholder="Email..." />
          <input className="btn btn-success" type="submit" value="log in" />
        </form>
      </div>
    </div>
  );
};

App.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default App;
