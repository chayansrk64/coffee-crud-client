import {useLoaderData} from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const allCoffee = useLoaderData();

  const [coffees, setCoffees] = useState(allCoffee)
  
  return (
    <div className='m-20'>
       
      <h1 className='text-6xl text-center mb-5'>Coffee Store</h1>
      
      <div className=' grid md:grid-cols-2 gap-4'>
      {
        allCoffee.map(coffee => <CoffeeCard
           key={coffee._id} 
           coffee = {coffee}
           coffees={coffees}
           setCoffees={setCoffees}
        ></CoffeeCard> )
      }
      </div>
      
    </div>
  )
}

export default App
