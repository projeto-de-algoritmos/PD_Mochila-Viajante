import './App.css';
import AddItem from './Components/AddItem/index';
import MaxWeight from './Components/MaxWeight';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="App">
      <AddItem />
      <MaxWeight />
    </div>
  );
}

export default Home;
