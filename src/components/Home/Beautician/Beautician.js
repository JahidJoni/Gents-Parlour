import React from 'react';
import img from '../../../images/about-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Beautician = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>David Antonio</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-16464646</p>
        </div>
    );
};

export default Beautician;