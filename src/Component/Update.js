import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Update = () => {

    const { id } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/addproducts/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    const handleName = e => {
        const updateName = e.target.value;
        const updateUser = { name: updateName, price: products.price, quantity: products.quantity };
        setProducts(updateUser)

    }
    const handlePrice = e => {
        const updatePrice = e.target.value;
        const updateUser = { name: products.name, price: updatePrice, quantity: products.quantity };
        setProducts(updateUser)
    }
    const handleQuantity = e => {
        const updateQuantity = e.target.value;
        const updateUser = { name: products.name, price: products.price, quantity: updateQuantity };
        setProducts(updateUser)
    }
    const handleUpdateProducts = e => {
        const url = `http://localhost:5000/addproducts/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("update successfully")
                    setProducts({});
                    e.target.reset()
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>update here</h2>
            <h3>
                {products.name}
            </h3>
            <h3>{id}</h3>
            <div>
                <form onSubmit={handleUpdateProducts} >
                    <input type="text" onChange={handleName} value={products.name || ''} placeholder="Products name" required />
                    <input onChange={handlePrice} value={products.price || ''} type="text" placeholder="Price" required />
                    <input onChange={handleQuantity} value={products.quantity || ''} type="text" placeholder="Quantity" required />
                    <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;