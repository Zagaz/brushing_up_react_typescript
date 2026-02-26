import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonsList } from './components/PersonList';



function App() {
  const superHeroes =[
    {
      firstName: "Bruce",
      lastName: "Wayne"
    },
    {
      firstName: "Clark",
      lastName: "Kent"
    },
    {
      firstName: "Diana",
      lastName: "Prince"
    }
  ]
  return (
    <div className="App">
      <Greet name = "Andre" messageCount = {6} isLoggedIn={false} />
      <Person name={{ firstName: "Andre", lastName: "Ranulfo" }} />
      <PersonsList name={superHeroes} />

      

    </div>
  );
}

export default App;
