// src/App.jsx
import React, { Component } from 'react';

class App extends Component {
  state = {
    chicken: [
      {race: 'Harco', type: 'pondeuse', imgUrl: 'https://source.unsplash.com/random/150x150'},
      {race: 'Cou nu', type: 'chair', imgUrl: 'https://source.unsplash.com/random/150x150'},
      {race: 'Standard', type: 'chair', imgUrl: 'https://source.unsplash.com/random/150x150'},
    ],
    current: 0
  };

  render() { 
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.chicken.map((chick, index) =>
            <li key={index} className={this.getListClasses(index)}>{chick.race}</li>
          )}
        </ul>
        <hr />
        <div className="card" style={{ width: '18rem' }}>
          <img src={this.getNext().imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.getNext().race}</h5>
            <p className="card-text">est une poule {this.getNext().type}</p>
            <a href="#" onClick={this.handleNextButton} className="btn btn-primary">Next</a>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getListClasses(index) {
    const classes = 'list-group-item';
    return this.state.current === index ? classes + ' active' : classes;
  }

  handleNextButton = () => {
    const { current } = this.state;

    this.setState({ current: (current === 2) ? 0 : (current + 1) });
  }

  getNext() {
    const { current, chicken } = this.state;

    return chicken[current];
  }
}

export default App;