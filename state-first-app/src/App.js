import React, { Component } from 'react';
import './App.css';

import User from './components/User'


class App extends Component {

  state = {
    userA: {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      lastName: "Hello",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    },
    clickCount: 0,
    backColor: 'green'
  }

  colorMapper = () => "#" + Math.floor(Math.random() * 16777215).toString(16)



  clickHandler = () => {

    if (this.state.clickCount < 8) {

      this.setState({ clickCount: ++this.state.clickCount })

    } else {

      this.setState({
        clickCount: ++this.state.clickCount,
        userA: {
          firstName: "Maria",
          lastName: "Whatever",
          avatarUrl:
            "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
        },
        userB: {
          firstName: "Sergio",
          lastName: "dohe",
          avatarUrl:
            "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
        },
        backColor: this.colorMapper()
      })
    }
  }


  render() {

    return (
      <div className="App">

        <h1>State en React :D</h1>

        <p>El botón ha sido presionado {this.state.clickCount} veces</p>
        <button onClick={this.clickHandler}>Hazme click</button>

        <hr></hr>

        <User
          name={this.state.userA.firstName}
          theColor={this.state.backColor}
          image={this.state.userA.avatarUrl}
        />

        <User
          name={this.state.userB.firstName}
          theColor={this.state.backColor}
          image={this.state.userB.avatarUrl}
        />
      </div>
    );
  }
}

export default App;
