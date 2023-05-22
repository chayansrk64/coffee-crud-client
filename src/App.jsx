import {Link, useLoaderData} from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const allCoffee = useLoaderData();

  const [coffees, setCoffees] = useState(allCoffee)

  
  
  return (
    <div className='md:mx-20'>

      {/* Navigation start===================>>> */}
      <div>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Coffee Store</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/addCoffee">Add Coffee</Link> </li>
              </ul>
            </div>
          </div>
      </div>
       

       {/* Navigation end================== */}

      


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
