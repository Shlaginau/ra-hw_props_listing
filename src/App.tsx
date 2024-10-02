import './App.css';
import Listing from './components/Listing';
import data from './data/etsy.json';
import { ItemInterface } from './interface/ItemInterface'; 

function App() {

  const items: ItemInterface[] = data as ItemInterface[];

  return (
    <div>
      <Listing items={items} />
    </div>
  );
}

export default App;