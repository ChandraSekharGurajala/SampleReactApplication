import React from "react";
import Data from "./data";

const Dataitem=(props)=>{

   return(
<div>
<div class="topnav">
  <a  href="/home">Home</a>

  
  <a href="/about">About</a>
  
  <a href="/data">Data</a>

  <a href="/dataitem">DataItem</a>
  </div>
<h1>hii</h1>

<Data id="1" name="Chandu"/>
</div>
   ) 
}
export default Dataitem;