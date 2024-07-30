import React, { useState } from "react";
import './App.css';
 

function List(){
    const [addValue,setaddValue]=useState("");
    const [data,setdata]=useState([]);
    const ClickHandler =()=>{
setdata([...data,addValue]);
setaddValue("")
    }
  const removeHandler=(index)=>{
const remove = data.filter((item,indexitem)=>indexitem !==index);
setdata(remove)
  }
  const resetvalue=()=>
  {
    setdata([]);
  }
    return(
        
        <div className="todolist">
            <h1 style={{color:"black",textAlign:"center"}}>TO DO LIST</h1>
    <div className="input">
        <input type="text" placeholder="Enter the value" onChange={(e)=>setaddValue(e.target.value)} value={addValue}/>
        
        <button className="btn1" onClick={()=>ClickHandler()}>ADD</button>
        <button className="btn2" onClick={resetvalue}>RESET</button>
        </div>
        
        <div className="list">
            {data.map((item,index)=>{
                return(
                  <>
                    <ul className="ul">
                        
                    <li className='li'>{item}</li>
                    </ul>
                    <button className="but1" onClick={()=>removeHandler(index)}>REMOVE </button>
                    
                    
                      </>
            )
            
            }
            )}
           
        </div>
        </div>
    )
}
export default List;

