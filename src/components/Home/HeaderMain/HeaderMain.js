import React from 'react';
import top from '../../../images/top1.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#91219E'}}>WE CARE ABOUT <br/> YOUR GLAMOUR</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-info">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={top} alt="" className="img-fluid rounded"/>
            </div>
        </main>
    );
};

export default HeaderMain;