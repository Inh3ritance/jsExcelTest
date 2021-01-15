import React, { useEffect, useState } from 'react';
import jexcel from 'jexcel';
import './App.css';
import '../node_modules/jexcel/dist/jexcel.css';

const App = (props) => {
  const [data, getData] = useState([[]]);
  const [minDimensions, getMinDimensions] = useState([5,5]);
  const [header, getHeader] = useState("");
  const wrapper = React.createRef();
  var el = null;

  useEffect(()=>{
    if(el === null)
      el = jexcel(wrapper.current, {data,minDimensions,header})
  })

  const SaveData = () =>{
    useEffect(() => {
      getData(el.getData());
      getMinDimensions([ el.getWidth(), this.el.getHeight() ]);
      getHeader(el.getHeaders());
    });
  }

  return (
    <div>
      <div ref={wrapper} />
      <br /> 

      <div className="order">
        <button className="button_row" onClick={() => el.deleteRow()}>-</button>
        <p className="button_row">Row</p>
        <button className="button_row" onClick={() => el.insertRow()}>+</button>
      </div>

      <div className="order">
        <button className="button_row" onClick={() => el.deleteColumn()}>-</button>
        <p className="button_row">Coloumn</p>
        <button className="button_row" onClick={() => el.insertColumn()}>+</button>
      </div>

      <button onClick={() => SaveData()}>save</button>

    </div>
  );

}

export default App;
