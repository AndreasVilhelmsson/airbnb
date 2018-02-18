import React, { Component } from "react";
import "./App.css";
import Flat from "./components/flat/flat";
import Marker from "./components/marker/marker";
import GoogleMapReact from "google-map-react";
/* import Header from "./components/header/header"; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          allFlats: data,
          flats: data,
          selectedFlat: data[0]
        });
      });
  }

  selectFlat = flat => {
    this.setState({
      selectedFlat: flat
    });
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter(flat =>
        new RegExp(event.target.value, "i").exec(flat.name)
      )
    });
  };

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };

    let zoom = 12;

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
      zoom = 16;
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
          <div className="flats">
            {this.state.flats.map(flat => {
              return (
                <Flat
                  key={flat.name}
                  flat={flat}
                  selectFlat={this.selectFlat}
                />
              );
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact center={center} zoom={zoom}>
            {this.state.flats.map(flat => {
              return (
                <Marker {...flat} selected={flat === this.state.selectedFlat} />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;