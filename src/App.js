
import React, { useState } from 'react';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css';
// import { Multiselect } from 'react-widgets';


function App() {

  // let { Multiselect } = ReactWidgets;

  const [dropdata,setDropdata] = useState([
                                {
                                  number:'0-24'
                                },
                                {
                                  number:'25-99'
                                },
                                {
                                  number:'100-249'
                                },
                                {
                                  number:'250-499'
                                },
                                {
                                  number:'500-999'
                                },
                                {
                                  number:'1000-4999'
                                },
                                {
                                  number:'5000-9999'
                                },
                                {
                                  number:'10000-49999'
                                },
                                {
                                  number:'50000-100000'
                                },
                                {
                                  number:'>100000'
                                },
                                ]);
  const [selected,setSelected] = useState([]);
  const [rightbox,setRightbox] = useState([]);
  const [assign,setAssign] = useState([]);
  const [btn,setBtn] = useState("id_button");
  const [box,setBox] = useState("checkbox");
  const [clear,setClear] = useState(false);

  const handleclick = () => {
    setRightbox(assign);
    setClear(false);
    console.log("kkkkkkkkkkkkkkkkkk"+ rightbox);
  }
  const selectall = () => {
    console.log("clicked");
}
const clearall = () => {
  // setSelected(null);
  setClear(true);
  setRightbox([]);
  
  // setAssign(null);
}
const buttonclick = (btnvalues) => {
  selected.push(btnvalues);
  // selected.pop();
  setAssign(selected);
}


  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-6 d-inline">
        <ul className="list-inline">
            <li className="list-inline-item">Available: </li>
            <li className="list-inline-item text-primary"><p onClick={selectall}>Select All</p></li>
        </ul>
        </div>
        <div className="col-6">
        <ul className="list-inline">
            <li className="list-inline-item">Selected: </li>
            <li className="list-inline-item text-primary"><p onClick={clearall}>Clear All</p></li>
        </ul>
        </div>
      </div>
      <div className="row">

        <div className="col-6">
        <div className="border border-primary bg-light">
        <p id={btn}>
        {dropdata.map((item, index) => (
          <label>
            <input key={index} 
                   type={box} 
                   onClick={() =>buttonclick(item.number)} 
                   name="button1"
                   value="1"></input>
            <span>{item.number}</span>
          </label>
          ))}
        </p>
        </div>
        </div>
        <div className="mt-3">
        <i className="fa fa-arrow-right" onClick={handleclick} aria-hidden="true"></i>
        </div>
        
        
        <div className="col-5">
        <div className="border border-primary bgrightbox">
        <p id="id_button">
        {rightbox.map((item, index) => (
          <label>
            <input key={index} type="checkbox"  name="button1" value="1"></input>
            <span>{item}</span>
          </label>
          ))}
        </p>
        { clear &&
        <p>No data exist</p>
        }
        </div>
        </div>

        <div className="col-6"></div>
      </div>               
    </div>
  );
}


export default App;
