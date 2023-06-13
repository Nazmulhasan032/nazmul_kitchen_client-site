import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CheifCard = ({ chief }) => {
    const { id, name, picture, experience, likes, recipe } = chief;

    return (
        <>
            <div className='container'>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={picture} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Experience: {experience} years</p>
                                <p className="card-text"><small className="text-body-secondary">Recipe: {recipe}</small></p>
                                <p className="card-text"><FaThumbsUp /> {likes}</p>
                                <Link to='/details'><Button variant="outline-secondary">Details</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CheifCard;



// {`/details/${id}`}