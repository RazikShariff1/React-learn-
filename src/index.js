import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let date=new Date().toLocaleDateString()
// let name="Razik"
// ReactDOM.render(<><h1>hello {name}</h1>
// <p>this is the secound tag</p></>,document.getElementById("root"))
function img(){
let img=" https://picsum.photos/400/300"
    document.getElementById("img").src=img
}
setInterval(img, 1000);//not working use api for the the same later
ReactDOM.render(<><h1 id='heading' /*contentEditable  //try this attribute*/>Secound app</h1>
<p>{`todays date is ${date}`}</p>
<img id='img' src='' alt="randomimg"></img></>,document.getElementById("root"))
