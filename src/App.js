import React from 'react';
import 'App.css';
import { Button } from 'antd';

class Counter1 extends React.Component {
  state = {
    value: this.props.initialValue,
  }

  onClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        Counter1: {value}
        <Button onClick={this.onClick}>+1</Button>
      </div>
    );
  }
}



function App() {
  return (
    <div>
      <Counter1 initialValue={10}/>
      <Counter1 initialValue={10}/>
      <Counter1 initialValue={10}/>
    </div>

  );
}

export default App;
