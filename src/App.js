import logo from './logo.svg';
import React, { Fragment,useState } from 'react';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css';
// import Multiselect from 'react-widgets/lib/Multiselect';
import { Multiselect } from 'react-widgets';

function App() {

  // let { Multiselect } = ReactWidgets;

  const [dropdata,setDropdata] = useState(['0-24', '25-99']);
  const [selected,setSelected] = useState([]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 d-inline">
        <ul class="list-inline">
            <li class="list-inline-item">Available: </li>
            <li class="list-inline-item text-primary"><p onClick={console.log("clicked")}>Select All</p></li>
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
          />
        </div>
        </div>
        <div className="col-6">
        <div class="border border-primary">
        <Multiselect
            data={selected}
          />
        </div>
        </div>
      </div>               
    </div>
  );
}

export default App;
