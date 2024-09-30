import './App.css';
import Card from './components/Card';
import insideout2 from './img/insideout2.jpeg';
import moana2 from './img/moana2.jpeg';


export default function App() {
  return (
    <div className="app">
      <Card link={insideout2} count={4} />
      <Card link={moana2} count={5} />
    </div>
  );
}