import React from "react";
import axios from "axios";

import './App.css';

class App extends React.Component {
  state = {
    advice: "",
  };
  
    componentDidMount(){
        this.fetchAdvice()
    }

  fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const {advice} = response.data.slip;
      this.setState({advice});
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
        <div className="app">
            <div className="advice">
                <h1>{this.state.advice}</h1>
                <button className="button" onClick={this.fetchAdvice}><span>Refresh</span></button>
            </div>  
        </div>
    )
  }
}

export default App;
