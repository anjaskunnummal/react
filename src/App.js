// import logo from './logo.svg';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "./App.css";
import Dashboard from './pages/Dashboard/Dashboard';
import Exam from "./pages/Exam/Exam";
import Header from './pages/Header/Header';

function App() {


  
  return (
  


    <Router>
        <Header />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about/:id" element={<Exam />} />
    </Routes>
  </Router>


      /* <Home data={test_arr}/> */
      /* <ul>
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

      <Dashboard/> */



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

// function Home(props){
//   const data_from = props.data
//   console.log("data are reached",data_from)
//   return(
//     <div>
//       <h1>hello</h1>
//       {data_from.map(val=>
//         <h1>{val.name}</h1>)}
//     </div>
//   )
// }

export default App;
