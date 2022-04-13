import './App.css';
import knapsack from './Knapsack';

const Homepage = () => {

  return (
    <div className="App">
        <input></input>
        <input></input>
        <button onClick={()=>knapsack()}></button>
    </div>
  );
}

export default Homepage;
