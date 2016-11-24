import React from 'react';
import { render } from 'react-dom';
import JokeComponent from './components/JokeComponent';

export default () => {
  render(< JokeComponent />, document.getElementById('content'));
}
