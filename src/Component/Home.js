import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ margin: "40px" }}>
            <NavLink style={{ marginRight: "50px" }} to="/addproducts">Add Products</NavLink>
            <NavLink to="/products">Products</NavLink>
        </div>
    );
};

export default Home;