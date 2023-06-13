import React from 'react';
import { FaAlignLeft, FaClock, FaEye } from "react-icons/fa";
import recipe1 from '../../assets/recipe1.jpg'
import recipe2 from '../../assets/recipe2.jpg'
import recipe3 from '../../assets/recipe3.jpg'
import recipe4 from '../../assets/recipe4.jpg'
import recipe5 from '../../assets/recipe5.jpg'
import recipe6 from '../../assets/recipe6.jpg'
const RecipeSection = () => {
    return (
        <div className='container my-5'>

            <h2>Latest Recipes</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src={recipe1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chicken Shawarma</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 15 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 8 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 4590 views</small> </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={recipe2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Vegetable salad</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 30 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 16 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 5450 views</small> </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={recipe3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chow mein</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 25 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 10 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 4508 views</small> </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={recipe4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Shrimp curry</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 40 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 13 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 4950 views</small> </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={recipe5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Noodles</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 5 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 9 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 45506 views</small> </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={recipe6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pasta</h5>
                            <p className="card-text mb-0"> <small><FaClock /> 25 min</small></p>
                            <p className="card-text mb-0"> <small> <FaAlignLeft /> 6 ingredients</small> </p>
                            <p className="card-text"> <small><FaEye /> 84250 views</small> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecipeSection;