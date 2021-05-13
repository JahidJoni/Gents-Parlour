import React from 'react';
import Beautician from '../../../images/photo-1605497788044-5a32c7078486.jpg';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 text-white py-5">
                    <h4 className="text-info text-uppercase">Appointment</h4>
                        <h1 className="my-4 text-info bg-dark p-1 rounded">Make an Appointment Today</h1>
                        <p className="bg-secondary p-1 rounded">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    <div className="col-md-5">
                    <img className="img-fluid" src={Beautician} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;