import React, { Component } from 'react';
import { coroutine as co } from 'bluebird';

export default class JokeComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      jokes : []
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    co(function* (){
      const number = yield this.getRandomNumber();
      const jokesResponse = yield this.getChuckNorrisJokes(number);
      const jokes = yield jokesResponse.json();
      const { value : jokesArray } = jokes;
      this.setState({ jokes:jokesArray })
    }.bind(this))();
  }

  getRandomNumber() {
      const getRandomNumberPromise = new Promise((resolve, reject) =>{
        setTimeout(() => {
          const randomNumber = Math.floor(Math.random() * 10 ) + 1;
          resolve(randomNumber);
        }, 2000);
      });
      return getRandomNumberPromise;
  }

  getChuckNorrisJokes(n) {
    return fetch(`http://api.icndb.com/jokes/random/${n}`);
  }

  render() {
    const { jokes : jokesArray } = this.state;
    const style = {
      color : 'blue'
    }
    const jokes = jokesArray.map((joke, key) => {
      return <li style = {style} key={key}> { joke.joke } </li>
    });
    return (
      <div>
        <h1> Jokes {this.state.jokes.length} </h1>
        <ol> { jokes } </ol>
      </div>
    );
  }

}
