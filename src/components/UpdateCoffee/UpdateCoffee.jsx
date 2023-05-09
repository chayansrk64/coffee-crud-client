import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;


    const handleUpdateCoffee = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Succssfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        .catch(error => console.log(error))



    }


    return (
         <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-center text-2xl font-bold mb-3">Update a Coffee</h2>
             
                <form onSubmit={handleUpdateCoffee}>
                    {/* form name and quantity row */}
                   <div className=" md:flex mb-6">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Coffee Quantity</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Coffee Quantity" className="input   w-full" />
                        </label>
                    </div>
                   </div>
                    {/* form supplier and taste row */}
                   <div className=" md:flex mb-6">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Coffee supplier" className="input  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Coffee Taste</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="taste" defaultValue={taste} placeholder="Coffee Test" className="input   w-full" />
                        </label>
                    </div>
                   </div>
                    {/* form category and details row */}
                   <div className=" md:flex mb-6">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="category" defaultValue={category} placeholder="Coffee Category" className="input  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Coffee Details</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="details" defaultValue={details} placeholder="Coffee Details" className="input   w-full" />
                        </label>
                    </div>
                   </div>
                    {/* form  photo row */}
                   <div className="mb-8">
                   <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input  w-full" />
                        </label>
                    </div>
                     
                   </div>
                  
                   <input type="submit" value="Add Coffee"  className="btn btn-block"/>
                </form>
             
        </div>
    );
};

export default UpdateCoffee;