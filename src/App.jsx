import { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  const people = [
    {
      id: 0, 
      name: "Amit",
      src:"https://randomuser.me/api/portraits/men.jpg",
      desc:"Good Hardworking and Talented Individual"
    },
    {
    id: 1, 
    name: "Aditya",
    src:"https://randomuser.me/api/portraits/men/20.jpg",
    desc:"5+ years of Experience in React and Javascript"
    },
    {
      id: 2, 
      name: "Yuan Che",
      src:"https://randomuser.me/api/portraits/men/26.jpg",
      desc:"5+ years of Experience in React and Javascript"
      }
  ]

  return (
    <>
    <div className="heading">
      <h2 className="heading-title">Welcome to the FriendList</h2>
    </div>
        <div className="container">
            {people.map((person)=>(
              <Card key={person.id} name={person.name} img={person.src} desc = {person.desc} />
            ))}
        </div>
    </>
  )
}

export default App
