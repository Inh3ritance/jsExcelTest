import React, { useEffect, useState } from 'react';
import jexcel from 'jexcel';
import './App.css';
import '../node_modules/jexcel/dist/jexcel.css';

const App = (props) => {
  const [data, getData] = useState([[]]);
  const [minDimensions, getMinDimensions] = useState([5,5]);
  const [header, getHeader] = useState("");
  const wrapper = React.createRef();
  const [je, Setje] = useState(null);

  useEffect(() => {
    Setje(jexcel(wrapper.current, {data,minDimensions,header}));
  }, []);

  const SaveData = () => {
    getData(je.getData());
    getMinDimensions([ je.getWidth(), je.getHeight() ]);
    getHeader(je.getHeaders());
  }

  return (
    <div>
      <div ref={wrapper} />
      <br /> 

      <div className="order">
        <button className="button_row" onClick={() => je.deleteRow()}>-</button>
        <p className="button_row">Row</p>
        <button className="button_row" onClick={() => je.insertRow()}>+</button>
      </div>

      <div className="order">
        <button className="button_row" onClick={() => je.deleteColumn()}>-</button>
        <p className="button_row">Coloumn</p>
        <button className="button_row" onClick={() => je.insertColumn()}>+</button>
      </div>

      <button onClick={SaveData}>save</button>

    </div>
  );

}

export default App;
