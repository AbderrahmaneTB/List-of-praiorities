"use client";

import {useState} from "react";

function listofpra(){
 
    const [tasks, setTasks] = useState([]);
    const [newt,setNewt] = useState ("");

    function handlinput (event){
        setNewt(event.target.value);

    }
    function addt (){

        if (newt.trim() !== ""){
            setTasks(t=> [...t,newt]);
            setNewt("");
        }
     
    }

    function delett(index){
     const updatedt = tasks.filter((_,i)=> i !== index);
     setTasks(updatedt);

    }
    function movetup(index){
     if (index>0){
      const updatedt=[...tasks];
      [updatedt[index],updatedt[index-1]]=[updatedt[index-1],updatedt[index]];
      setTasks(updatedt);
     }

    }
    function movetd (index){
        if (index<tasks.length -1){
            const updatedt=[...tasks];
            [updatedt[index],updatedt[index+1]]=[updatedt[index+1],updatedt[index]];
            setTasks(updatedt);
           }
    }

    return(
        <div className="listofpra">
            <h1>What is your List of praiorities</h1>
       

        <div>
            <input type="text" placeholder="Entre a task ..." value={newt} onChange={handlinput}/>
            <button className="addt" onClick={addt}>Add</button>
        </div>

        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delett" onClick={()=>delett(index)}>Delete Task </button>
                <button className="moveb" onClick={()=>movetup(index)}>Up </button>
                <button className="moveb" onClick={()=>movetd(index)}>Down </button>
            </li>
            )}
        </ol>
        </div>

    );


}
export default listofpra