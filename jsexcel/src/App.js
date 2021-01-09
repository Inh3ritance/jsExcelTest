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
      minDimensions: [10,10]
    }
    this.options = props.options;
    this.wrapper = React.createRef();
  }

  componentDidMount() {
    this.el = jexcel(this.wrapper.current, this.state);
  }

  addRow() {
    this.el.insertRow();
  };

  render() {
    return (
      <div>
        <div ref={this.wrapper} />
        <br />
        <input
          type="button"
          value="Add new row"
          onClick={() => this.addRow()}
        />
      </div>
    );
  }
}

var options = {
  data: [[]],
  minDimensions: [10, 10]
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App options={options} />, rootElement);

export default App;
