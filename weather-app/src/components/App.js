import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";
import img1 from "../images/weather.jpg";

// Key to API
const APIKey = "edd8a3f3803133b248c7164309acb2be";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false
  };
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  // handleCitySubmit = e => {
  //   e.preventDefault();

  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
  //   fetch(API)
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error("Nie udało się");
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       const time = new Date().toLocaleString();
  //       this.setState(prevState => ({
  //         err: false,
  //         date: time,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         city: prevState.value
  //       }));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState(prevState => ({
  //         err: true,
  //         city: prevState.value
  //       }));
  //     });
  // };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Fail to load weather");
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          this.setState(prevState => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: prevState.value
          }));
        })
        .catch(err => {
          console.log(err);
          this.setState(prevState => ({
            err: true,
            city: prevState.value
          }));
        });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          // submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
        <img className="img" src={img1} alt="weather" />
      </div>
    );
  }
}

export default App;
