import React, { useReducer } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import { login, signup } from '../../firebase.js';

const initialState = {
  signState: "Sign In",
  name: "",
  email: "",
  password: "",
  loading: false
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };

    case "SET_LOADING":
      return { ...state, loading: action.value };

    case "SET_SIGN_STATE":
      return { ...state, signState: action.value };

    case "RESET_FIELDS":
      return { ...state, name: "", email: "", password: "" };

    default:
      return state;
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const user_auth = async (e) => {
    e.preventDefault();

    // basic validation (optional)
    if (!state.email || !state.password || (state.signState === "Sign Up" && !state.name)) {
      // you could dispatch an error here; for now just console
      console.warn('Please fill required fields');
      return;
    }

    dispatch({ type: "SET_LOADING", value: true });

    try {
      if (state.signState === "Sign In") {
        await login(state.email, state.password);
      } else {
        await signup(state.name, state.email, state.password);
      }
      dispatch({ type: "RESET_FIELDS" });
    } catch (err) {
      console.error('Auth error:', err);
      // set error state or show toast
    } finally {
      dispatch({ type: "SET_LOADING", value: false });
    }
  };

  return state.loading ? (
    <div className='login-spinner'>
      <img src={netflix_spinner} alt='spinner'/>
    </div>
  ) : (
    <div className='login'>
      <img src={logo} className='login-logo' alt="logo" />
      <div className='login-form'>
        <h1>{state.signState}</h1>
        <form onSubmit={user_auth}>
          {state.signState === "Sign Up" && (
            <input
              value={state.name}
              onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })}
              type='text'
              placeholder='Your name'
            />
          )}

          <input
            value={state.email}
            onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })}
            type='email'
            placeholder='Email'
          />

          <input
            value={state.password}
            onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "password", value: e.target.value })}
            type='password'
            placeholder='Password...'
          />

          <button type='submit'>{state.signState}</button>

          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' id='remember'/>
              <label htmlFor='remember'>Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>

        <div className='form-switch'>
          {state.signState === "Sign In" ? (
            <p>New to Netflix? <span onClick={() => dispatch({ type: "SET_SIGN_STATE", value: "Sign Up" })}>Sign Up Now</span></p>
          ) : (
            <p>Already have account? <span onClick={() => dispatch({ type: "SET_SIGN_STATE", value: "Sign In" })}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
