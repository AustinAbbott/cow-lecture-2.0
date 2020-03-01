import React from 'react';
import './App.css';

import Tile from './components/Tile';
import Moo from './components/Moo';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      currentCow: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/cows')
      .then(data => data.json())
      .then(res => this.setState({ cows: res, currentCow: res[0] }));
  }

  clickHandler = (idx) => {
    this.setState({ currentCow: this.state.cows[idx] })
  }

  createCow = (e, name, description) => {
    e.preventDefault();

    const cowObj = {
      name: name,
      description: description
    };
    
    fetch('http://localhost:8080/cows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cowObj)
    })
      .then(res => console.log(res));
  }

  butcher = (idx) => {
    this.setState((prevState) => {
      const oldState = prevState.cows;
      oldState.splice(idx, 1);
      return {
        cows: oldState
      }
    })
  }

  render() {  
    return (
      <div className="App">
        {/* parens provides the return  */}
        {this.state.cows.map((cow, idx) => (
          <Tile
            key={cow.cow_id}
            butcher={this.butcher}
            idx={idx}
            cow={cow}
            clickHandler={this.clickHandler}
          />
        ))}

        {
          this.state.currentCow ? (
            <Moo currentCow={this.state.currentCow} />
          ) : null
        }
        
        <Form createCow={this.createCow} />
      </div>
    );
  }
}

export default App;
