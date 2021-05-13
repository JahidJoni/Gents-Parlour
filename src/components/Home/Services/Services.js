import React from 'react';
import fluoride from '../../../images/istockphoto-638952778-612x612.jpg';
import cavity from '../../../images/unnamed (1).jpg';
import whitening from '../../../images/make over salon for man.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Hair Treatment',
        img: fluoride
    },
    {
        name: 'Facial',
        img: cavity
    },
    {
        name: 'Body Scrub',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-3 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;