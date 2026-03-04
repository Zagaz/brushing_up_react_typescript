import './App.css';
import Button from './components/Button';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import { Person } from './components/Person';
import { PersonsList } from './components/PersonList';
import { Status } from './components/Status'




function App() {
  const superHeroes = [
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
      <Greet name="Andre" messageCount={6} isLoggedIn={false} />
      <Person name={{ firstName: "Andre", lastName: "Ranulfo" }} />
      <PersonsList name={superHeroes} />
      <Status status="loading" />
      <Oscar>
        <Heading>
          John Doe
        </Heading>
      </Oscar>
      <Greet name='Picard' isLoggedIn={true} />
      <Button handleClick={ (event,id) =>{
        alert (`Button: ${id}`)
        console.warn(event,id)
      } }  buttonText='Alert'/>
    </div>
  );
}

export default App;
