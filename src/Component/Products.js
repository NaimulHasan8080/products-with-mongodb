import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addproducts`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    //delete the user from database
    const handleDelete = id => {

        const proceed = window.confirm("are you sure delete");
        if (proceed) {
            const url = `http://localhost:5000/addproducts/${id}`;

            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // console.log(data.deleteCount)
                        alert("delete successfully")
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
                    }
                })
        }
    }



    return (
        <div>
            <h2>Total Products : {products.length}</h2>
            <ul>
                {
                    products.map(product => <li key={product._id}>name :{product.name} --- Price : {product.price} -- Quantity : {product.quantity} <Link to={`/addproducts/update/${product._id}`}><button>Update</button></Link> <button onClick={() => handleDelete(product._id)}>Delete</button> </li>)
                }
            </ul>
        </div>
    );
};

export default Products;