import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {

  state = {
    users: [
      {name: 'Poghos', age: 43},
      {name: 'Petros', age: 23},
      {name: 'Manush', age: 19}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was cliched!');
    this.setState({
      users:
      [
        {name: newName, age: 43},
        {name: 'Petros', age: 23},
        {name: 'Manush', age: 89}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      users:
      [
        {name: 'Poghos', age: 43},
        {name: event.target.value, age: 23},
        {name: 'Manush', age: 89}
      ]
    })

  }


  render() {
    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '2px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
       <h1> Users </h1>
       <p> Type your Username </p>
       <button
       style={style}
       onClick={this.switchNameHandler.bind(this, 'Martiros')}>Edit Name</button>
       <User
       name={this.state.users[0].name}
       age={this.state.users[0].age} />
       <User
       name={this.state.users[1].name}
       age={this.state.users[1].age}
       click={this.switchNameHandler.bind(this, 'Jone')}
       changed={this.nameChangeHandler}>My Hobbies: Singing</User>
       <User
       name={this.state.users[2].name}
       age={this.state.users[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It works'))
  }
}

export default App;
