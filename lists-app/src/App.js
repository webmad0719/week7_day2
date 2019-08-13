import React, { Component } from 'react'
import './App.css'

import { numbersList, citiesItems, moviesList } from './components/list-demo'
import DynamicMoviesList from './components/Dynamic-list'

class App extends Component {
  render() {
    return (
      <div className="App container">

        <h3>Exportaciones nominales</h3>

        <div className="row">

          <div className="col-md-6">
            <ul>{numbersList}</ul>
          </div>

          <div className="col-md-6">
            <ul>{citiesItems}</ul>
          </div>

        </div>

        <hr></hr>

        <h3>Películas</h3>

        <ul className="movies">
          <div className="row">
            {moviesList}
          </div>
        </ul>

        <hr></hr>

        <h3>Películas dinámicas</h3>

        <ul className="movies">
          <DynamicMoviesList />
        </ul>

      </div>
    );
  }
}


export default App;