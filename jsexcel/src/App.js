import React from 'react';
import ReactDOM from 'react-dom';
import jexcel from 'jexcel';
import './App.css';
import '../node_modules/jexcel/dist/jexcel.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [[]],
      minDimensions: [5,5],
    }
    this.options = props.options;
    this.wrapper = React.createRef();
  }

  componentDidMount() {
    this.el = jexcel(this.wrapper.current, this.state);
  }

  getData(){
    console.log(this.el.getData());
    console.log(this.el.getHeaders());
    console.log(this.el.getConfig());
  }

  render() {

    return (
      <div>
        <div ref={this.wrapper} />
        <br />

        <button onClick={() => this.el.deleteRow()}>-</button>
        <p>Row</p>
        <button onClick={() => this.el.insertRow()}>+</button>

        <button onClick={() => this.el.deleteColumn()}>-</button>
        <p>Coloumn</p>
        <button onClick={() => this.el.insertColumn()}>+</button>

        <button onClick={() => this.getData()}>d</button>

      </div>
    );
  }
}

export default App;
