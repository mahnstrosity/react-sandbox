import React, { Component } from 'react';
import d3ToSvg from 'd3-svg-to-png';
import './App.css';

class App extends Component {

  handleSavePng = () => {
    console.log( 'SAVE scale 10' );
    d3ToSvg( '#simpleCircle', 'savedPNG', {scale: 10} );
  };

  handleZoomIn = () => {
    console.log( 'ZOOM IN' );
   };

  handleZoomReset = () => {
    console.log( 'RESET ZOOM' );
   };

  handleZoomOut = () => {
    console.log( 'ZOOM OUT' );
  };  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SVG-to-PNG Sandbox</h1>
        </header>
        <div className="svg-div">
          <svg id="simpleCircle" width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="orange" stroke-width="4" fill="lightblue" />
          </svg>
        </div>  
        <div className="saveButton" onClick={this.handleSavePng}>
            Save PNG
        </div>
        <div className="saveButton" onClick={this.handleZoomIn}>
            +
        </div>
        <div className="saveButton" onClick={this.handleZoomReset}>
            Reset
        </div>
        <div className="saveButton" onClick={this.handleZoomOut}>
            -
        </div>
      </div>

    );
  }
}

export default App;
