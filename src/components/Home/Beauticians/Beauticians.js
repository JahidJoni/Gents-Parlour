import React from 'react';
import Beautician from '../Beautician/Beautician';

const Beauticians = () => {
    return (
        <section className="beauticians">
            <div className="container">
                <h5 className="text-center  text-info mb-5">Our Beauticians</h5>
                <div className="row">
                   <Beautician></Beautician>
                   <Beautician></Beautician>
                   <Beautician></Beautician>
                </div>
            </div>
        </section>
    );
};

export default Beauticians;