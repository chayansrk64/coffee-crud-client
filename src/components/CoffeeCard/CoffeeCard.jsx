 
import Swal from 'sweetalert2';
import {Link} from "react-router-dom";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
const {_id, name, quantity, supplier, taste, category, photo} = coffee;

    const handleDelete = _id => {
         
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if(result.isConfirmed){

              fetch(`http://localhost:5000/coffee/${_id}`, {
              method: "DELETE"

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                  Swal.fire(
                    'Deleted!',
                    'Your Coffee has been deleted.',
                    'success'
                  )

                  const remaining = coffees.filter(c => c._id !== _id)
                  setCoffees(remaining);
                  
                }
            })


            }

            
          })
    }
  
    
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-4">
            <figure><img src={photo} alt="Movie"/></figure>
            <div className="flex w-full justify-between">
                <div>
                <h2 className="card-title">{name}</h2>
                <p> {quantity}</p>
                <p> {supplier}</p>
                <p> {taste}</p>
                <p> {category}</p>
                </div>
                <div className="card-actions justify-end mr-3">
                  <div className="btn-group btn-group-vertical space-y-3">
                    <button className="btn">View</button>
                    <Link to={`updateCoffee/${_id}`}>  <button className="btn">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">Delete</button>
                    </div>
                  </div>
            </div>
            </div>
        </div>
    );
};

export default CoffeeCard;