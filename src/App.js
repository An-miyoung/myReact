import React from 'react';
import 'App.css';
import Counter from "Counter";


class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter color="green"/>
        <Counter color="yellow"/>
      </div>
    );
  }
}

export default App;
