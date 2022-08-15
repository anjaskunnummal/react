import React ,{useState} from "react";


export default function Dashboard() {

  //   let name = 'Anjas' 

  const [val,Setval] = useState(0)

  const [color,setColor] = useState('red')

  const test_arr = [
    {
      name: "apple",
      price: 200,
    },
    {
      name: "orange",
      price: 400,
    },
  ];

const Sayhello = (val)=>{
  window.alert("Welcome "+val)
}

const save = ()=>{
  window.confirm("save working")
}

  function funSet(){
    if(val==10){
      Setval(100)
    }
    if(color=='blue'){
      window.alert("set color changed successfully")                 
    }
  }

  return (
    <div>
      Dashboard

       <ul>
        {test_arr.map((item) => (
          <li onClick={save}>{item.name}</li>
        ))}
      </ul>

      <button onClick={()=>Sayhello('James')}>click me</button>

      <p>Count : {val}</p>

      <button onClick={()=>Setval(val+1)}>usestate</button>

      <p>color : {color}</p>

      <button onClick={()=>setColor('blue')}>statecolor</button>

      <button onClick={funSet}>usesate by function</button>

    </div>
  );
}
