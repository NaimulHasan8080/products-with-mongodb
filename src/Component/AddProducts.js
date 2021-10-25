import React, { useRef } from 'react';

const AddProducts = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();



    const handleAddProducts = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        // console.log(name, price, quantity)

        const products = { name, price, quantity };

        fetch('http://localhost:5000/addproducts', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("successfully added")
                    e.target.reset('')
                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleAddProducts} >
                <input type="text" ref={nameRef} placeholder="Products name" required />
                <input ref={priceRef} type="text" placeholder="Price" required />
                <input ref={quantityRef} type="text" placeholder="Quantity" required />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProducts;