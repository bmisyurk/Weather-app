import React from 'react';
import Content from "./cont"
const API_KEY = "2d6a8587273c23978f7798f34ab694f1";

class App extends React.Component {


  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined

  }


  gettingWeather = async (e) => {
      e.preventDefault();
      var city = e.target.elements.city.value;
      const api_url = await
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      if (city && data.cod === 200) {
          this.setState({
              temp: data.main.temp,
              city: data.name,
              country: data.sys.country
          });
      } else if (data.cod === '404') {
          this.setState({
              temp: undefined,
              city: undefined,
              country: undefined
          });
          alert("Enter correct city!");
      } else {
          alert("Enter city!");
      }
      this.inputTitle.value = "";
  }

  render() {
    return (
        <div>
            <div>
                <h2>Weather app</h2>
            </div>
            <form onSubmit={this.gettingWeather}>
                <input type="text" name="city"  placeholder="Enter city" ref={el => this.inputTitle = el} />
                <button>Get info</button>
            </form>
          <Content
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          />
        </div>
    );
  }

}

export default App;

