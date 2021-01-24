import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css';
import { Multiselect } from 'react-widgets';


function App() {

  // let { Multiselect } = ReactWidgets;

  const [dropdata,setDropdata] = useState(['0-24', '25-99','100-249']);
  const [selected,setSelected] = useState([]);

  const handleclick = () => {
      selected.concat(dropdata);
      setSelected(dropdata);
  }
  const selectall = () => {
    setSelected(dropdata);
    console.log("clicked------------------");
}

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-6 d-inline">
        <ul class="list-inline">
            <li class="list-inline-item">Available: </li>
            <li class="list-inline-item text-primary"><p onClick={selectall}>Select All</p></li>
        </ul>
        </div>
        <div className="col-6">
        <ul class="list-inline">
            <li class="list-inline-item">Selected: </li>
            <li class="list-inline-item text-primary"><p onClick={console.log("clicked")}>Clear All</p></li>
        </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <div class="border border-primary">
          <Multiselect
            data={dropdata}
            defaultValue={['0-24', '25-99']}
            textField='name'
            caseSensitive={false}
            minLength={3}
            filter='contains'
            onChange={handleclick}
          />
        </div>
        {/* <div className="col-2">
        </div> */}
        </div>
        <div className="col-6">
        <div class="border border-primary">
        <Multiselect
            data={selected}
            textField='name'
            caseSensitive={false}
            minLength={3}
            filter='contains'
          />
        </div>
        </div>
      </div>               
    </div>
  );
}

export default App;
